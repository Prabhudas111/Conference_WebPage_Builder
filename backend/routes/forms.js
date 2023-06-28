const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Form = require("../models/Form");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Forms using: GET "/api/forms/fetchallforms". Login required
router.get("/fetchallforms", fetchuser, async (req, res) => {
  try {
    const forms = await Form.find({ user: req.user.id });
    res.json(forms);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Form using: POST "/api/forms/addform". Login required
router.post(
  "/addform",
  fetchuser,
  [
    body("title"),
    body("dateTime"),
    body("location"),
    body("description"),
    body("speakers"),
    body("registrationInfo"),
    body("contactInfo"),
    body("additionalResources"),
    body("image"),
  ],
  async (req, res) => {
    try {
      const {
        title,
        dateTime,
        location,
        description,
        speakers,
        registrationInfo,
        contactInfo,
        additionalResources,
        image,
      } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // console.log(data, req.user.id);
      const form = new Form({
        title,
        dateTime,
        location,
        description,
        speakers,
        registrationInfo,
        contactInfo,
        additionalResources,
        image,
        user: req.user.id,
      });

      const savedForm = await form.save();

      res.json(savedForm);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing Form using: PUT "/api/forms/updateform". Login required
router.put("/updateform/:id", fetchuser, async (req, res) => {
  const {
    title,
    dateTime,
    location,
    description,
    speakers,
    registrationInfo,
    contactInfo,
    additionalResources,
    image,
  } = req.body;
  try {
    // Create a newForm object
    const newForm = {};
    if (title) newForm.title = title;
    if (dateTime) newForm.dateTime = dateTime;
    if (location) newForm.location = location;
    if (description) newForm.description = description;
    if (speakers) newForm.speakers = speakers;
    if (registrationInfo) newForm.registrationInfo = registrationInfo;
    if (contactInfo) newForm.contactInfo = contactInfo;
    if (additionalResources) newForm.additionalResources = additionalResources;
    if (image) newForm.image = image;

    let form = await Form.findById(req.params.id);
    if (!form) return res.status(404).send("Not found");
    if (form.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");

    form = await Form.findByIdAndUpdate(
      req.params.id,
      { $set: newForm },
      { new: true }
    );
    res.json(form);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

// ROUTE 4: Delete an existing Form using: DELETE "/api/forms/deleteform". Login required
router.delete("/deleteform/:id", fetchuser, async (req, res) => {
  try {
    const formId = req.params.id;
    if (!formId) {
      return res.status(400).send("Invalid form ID");
    }

    // Find the form to be deleted
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).send("Form not found");
    }

    // Allow deletion only if user owns this form
    if (form.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    // Delete the form
    const deletedForm = await Form.findByIdAndDelete(formId);
    res.json({ Success: "Form has been deleted", form: deletedForm });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

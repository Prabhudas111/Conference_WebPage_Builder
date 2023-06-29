const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Query = require("../models/Query");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Forms using: GET "/api/forms/fetchallforms". Login required
router.get("/fetchallqueries", fetchuser, async (req, res) => {
  try {
    const queries = await Query.find({ user: req.user.id });
    res.json(queries);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Form using: POST "/api/forms/addform". Login required
router.post(
  "/addquery",
  fetchuser,
  [body("question"), body("answer"), body("meeting_id"), body("meeting_title")],
  async (req, res) => {
    try {
      const { question, answer, meeting_id, meeting_title } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // console.log(data, req.user.id);
      const query = new Query({
        question,
        answer,
        meeting_id,
        meeting_title,
        user: req.user.id,
      });

      const savedQuery = await query.save();

      res.json(savedQuery);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing Form using: PUT "/api/forms/updateform". Login required
router.put("/updatequery/:id", fetchuser, async (req, res) => {
  const { question, answer, meeting_id, meeting_title } = req.body;
  try {
    // Create a newForm object
    const newQuery = {};
    if (question) newQuery.question = question;
    if (answer) newQuery.answer = answer;
    if (meeting_id) newQuery.meeting_id = meeting_id;
    if (meeting_title) newQuery.meeting_title = meeting_title;

    let query = await Query.findById(req.params.id);
    if (!query) return res.status(404).send("Not found");
    if (query.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");

    query = await Query.findByIdAndUpdate(
      req.params.id,
      { $set: newQuery },
      { new: true }
    );
    res.json(query);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

// ROUTE 4: Delete an existing Form using: DELETE "/api/forms/deleteform". Login required
router.delete("/deletequery/:id", fetchuser, async (req, res) => {
  try {
    const queryID = req.params.id;
    if (!queryID) {
      return res.status(400).send("Invalid query ID");
    }

    // Find the form to be deleted
    const query = await Query.findById(queryID);
    if (!query) {
      return res.status(404).send("query not found");
    }

    // Allow deletion only if user owns this form
    if (query.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    // Delete the form
    const deletedQuery = await Query.findByIdAndDelete(queryID);
    res.json({ Success: "Query has been deleted", form: deletedQuery });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

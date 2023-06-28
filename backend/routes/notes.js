const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
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
      const note = new Notes({
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
      // console.log("check here", note);
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
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
    // Create a newNote object
    const newNote = {};
    if (title) newNote.title = title;
    if (dateTime) newNote.dateTime = dateTime;
    if (location) newNote.location = location;
    if (description) newNote.description = description;
    if (speakers) newNote.speakers = speakers;
    if (registrationInfo) newNote.registrationInfo = registrationInfo;
    if (contactInfo) newNote.contactInfo = contactInfo;
    if (additionalResources) newNote.additionalResources = additionalResources;
    if (image) newNote.image = image;

    let note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).send("Not found");
    if (note.user.toString() !== req.user.id)
      return res.status(401).send("Not Allowed");

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    const noteId = req.params.id;
    if (!noteId) {
      return res.status(400).send("Invalid note ID");
    }

    // Find the note to be deleted
    const note = await Notes.findById(noteId);
    if (!note) {
      return res.status(404).send("Note not found");
    }

    // Allow deletion only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    // Delete the note
    const deletedNote = await Notes.findByIdAndDelete(noteId);
    res.json({ Success: "Note has been deleted", note: deletedNote });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

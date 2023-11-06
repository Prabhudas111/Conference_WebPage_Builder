const express = require("express");
const router = express.Router();
const Form = require("../models/Form");
// const Query = require("../models/Query");
// const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Forms using: GET "/api/forms/fetchallforms". Login required
// router.get("/fetchallqueries", async (req, res) => {
//   try {
//     const queries = await Query.find();
//     res.json(queries);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // ROUTE 2: Add a new Form using: POST "/api/forms/addform". Login required
// router.post(
//   "/addquery",
//   [body("question"), body("answer"), body("meeting_id"), body("meeting_title")],
//   async (req, res) => {
//     try {
//       const { question, answer, meeting_id, meeting_title } = req.body;

//       // If there are errors, return Bad request and the errors
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const query = new Query({
//         question,
//         answer,
//         meeting_id,
//         meeting_title,
//       });

//       const savedQuery = await query.save();

//       res.json(savedQuery);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );
// ROUTE 1: Get All the Forms using: GET "/api/forms/fetchallforms"
router.get("/fetchallforms", async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

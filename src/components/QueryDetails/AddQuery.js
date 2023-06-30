import React, { useState, useContext } from "react";
import queryContext from "../../context/queries/queryContext";

const AddQuery = (props) => {
  const { addQuery } = useContext(queryContext);
  const [equestion, setQuestion] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (equestion === "") {
      props.showAlert("Please Enter Valid Query", "danger");
      return;
    }

    addQuery({
      question: equestion,
      answer: "",
      meeting_id: props.id,
      meeting_title: props.title,
    });
    setQuestion("");

    props.showAlert("Query Submitted successfully", "success");
  };

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Query Form</h3>
      <form>
        <div className="form-group">
          <label htmlFor="questionInput">Query:</label>
          <input
            type="text"
            className="form-control"
            id="questionInput"
            value={equestion}
            onChange={handleQuestionChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQuery;

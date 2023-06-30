import React, { useState, useContext } from "react";
import QueryContext from "../../context/queries/queryContext";

const QueryService = (props) => {
  const [question, setQuestion] = useState("");

  const { queries, addQuery } = useContext(QueryContext);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = {
      question,
      answer: "HELLO",
      meeting_id: props.id,
      meeting_title: props.title,
    };

    try {
      await addQuery(query);
      setQuestion("");
    } catch (error) {
      console.log("An error occurred while adding the query:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Query Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="questionInput">Query:</label>
          <input
            type="text"
            className="form-control"
            id="questionInput"
            value={question}
            onChange={handleQuestionChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="mt-4">
        <h4>Queries:</h4>
        <ul className="list-group">
          {queries.map((query, index) => {
            if (query.answer !== "") {
              return (
                <li key={index} className="list-group-item">
                  <h5>Question: {query.question}</h5>
                  <p>Answer: {query.answer}</p>
                </li>
              );
            } else {
              return null; // Skip rendering if the answer is empty
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default QueryService;

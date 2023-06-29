import React, { useState, useContext, useEffect } from "react";
import QueryContext from "../context/queries/queryContext";


//updated 
const Inbox = () => {
  const context = useContext(QueryContext);
  const { queries, getQueries, editQuery } = context;

  useEffect(() => {
    getQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [editedQueries, setEditedQueries] = useState({});

  const handleClick = async (queryId) => {
    const editedQuery = editedQueries[queryId];
    await editQuery(
      queryId,
      editedQuery.question,
      editedQuery.answer,
      editedQuery.meeting_id,
      editedQuery.meeting_title
    );
    setEditedQueries((prevQueries) => {
      const updatedQueries = { ...prevQueries };
      delete updatedQueries[queryId];
      return updatedQueries;
    });
  };
 
  const handleCancelEdit = (queryId) => {
    setEditedQueries((prevQueries) => {
      const updatedQueries = { ...prevQueries };
      delete updatedQueries[queryId];
      return updatedQueries;
    });
  };

  const handleEdit = (queryId) => {
    const query = queries.find((query) => query._id === queryId);
    setEditedQueries((prevQueries) => ({
      ...prevQueries,
      [queryId]: { ...query },
    }));
  };

  const onChange = (e, queryId) => {
    const { name, value } = e.target;
    setEditedQueries((prevQueries) => ({
      ...prevQueries,
      [queryId]: {
        ...prevQueries[queryId],
        [name]: value,
      },
    }));
  };

  const meetings = Object.values(
    queries.reduce((acc, query) => {
      const { meeting_id, meeting_title } = query;
      if (!acc[meeting_id]) {
        acc[meeting_id] = {
          meeting_id,
          meeting_title,
          queries: [],
        };
      }
      acc[meeting_id].queries.push(query);
      return acc;
    }, {})
  );

  return (
    <div className="container">
      <h3 className="mt-4 mb-4">Meetings</h3>
      {meetings.map((meeting) => (
        <div key={meeting.meeting_id} className="card mb-4">
          <div className="card-header">
            <h4 className="card-title">{meeting.meeting_title}</h4>
          </div>
          <div className="card-body">
            {meeting.queries.map((query) => (
              <div key={query._id} className="mb-3">
                {editedQueries[query._id] ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-2"
                      name="question"
                      value={editedQueries[query._id].question}
                      onChange={(e) => onChange(e, query._id)}
                    />
                    <input
                      className="form-control mb-2"
                      name="answer"
                      value={editedQueries[query._id].answer}
                      onChange={(e) => onChange(e, query._id)}
                    />
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleClick(query._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleCancelEdit(query._id)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <h5>Question: {query.question}</h5>
                    <p>Answer: {query.answer}</p>
                    <button
                      className="btn btn-info"
                      onClick={() => handleEdit(query._id)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inbox;

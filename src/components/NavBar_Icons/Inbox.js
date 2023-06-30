//inbox updated

import React, { useState, useContext, useEffect } from "react";
import QueryContext from "../../context/queries/queryContext";
import FormContext from "../../context/forms/formContext";
const Inbox = () => {
  const { queries, getQueries, editQuery, deleteQuery } =
    useContext(QueryContext);
  const { forms, getForms } = useContext(FormContext);

  const [editedQueries, setEditedQueries] = useState({});

  useEffect(() => {
    getQueries();
    getForms();
  }, []);

  useEffect(() => {
    const updatedMeetings = queries.reduce((acc, query) => {
      const { meeting_id } = query;
      const form = forms.find((form) => form._id === meeting_id);
      if (form) {
        if (!acc[meeting_id]) {
          acc[meeting_id] = {
            meeting_id,
            meeting_title: form.title,
            queries: [],
          };
        }
        acc[meeting_id].queries.push(query);
      }
      return acc;
    }, {});
    setMeetings(Object.values(updatedMeetings));
  }, [queries, forms]);

  const [meetings, setMeetings] = useState([]);

  const handleClick = async (queryId) => {
    const editedQuery = editedQueries[queryId];
    await editQuery(
      queryId,
      editedQuery.question,
      editedQuery.answer,
      editedQuery.meeting_id,
      editedQuery.meeting_title
    );
    console.log("query updated", editedQuery);
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

  const handleDelete = async (queryId) => {
    await deleteQuery(queryId);
    // Update the meetings state by filtering out the deleted query
    setMeetings((prevMeetings) => {
      const updatedMeetings = prevMeetings.map((meeting) => ({
        ...meeting,
        queries: meeting.queries.filter((query) => query._id !== queryId),
      }));
      return updatedMeetings;
    });
  };

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
                    <button
                      className="btn btn-danger ml-2 mx-4"
                      onClick={() => handleDelete(query._id)}
                    >
                      Delete
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

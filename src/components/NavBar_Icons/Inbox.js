//inbox updated

import React, { useState, useContext, useEffect } from "react";
import QueryContext from "../../context/queries/queryContext";
import FormContext from "../../context/forms/formContext";
import NavBar from "./NavBar";
const Inbox = () => {
  const { queries, getQueries, editQuery, deleteQuery } =
    useContext(QueryContext);
  const { forms, getForms } = useContext(FormContext);

  const [editedQueries, setEditedQueries] = useState({});
  const [val, setVal] = useState(0);

  const handleval = () => {
    setVal(1 - val);
  };

  useEffect(() => {
    getQueries();
    getForms();
  }, [getForms, getQueries]);

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
    <>
      <NavBar />
      <div className="container mt-2 bg-gradient-to-br from-blue-800 to-cyan-400">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white-200 to-blue-100  mt-16 text-center pb-3">
          Meetings
        </h1>

        {meetings.map((meeting) => (
          <div
            key={meeting.meeting_id}
            className="card mb-4 grid grid-cols-1 min-w-90 "
            style={{ width: "90%" }}
          >
            <div className="card-header bg-red-500  p-4">
              <h4 className="card-title text-white text-xl font-bold">
                {meeting.meeting_title}
              </h4>
            </div>

            <div className="card-body  ">
              <details onClick={handleval}>
                <summary>{val === 0 ? "view" : "hide"} queries</summary>
                {meeting.queries.map((query) => (
                  <div
                    key={query._id}
                    className="mb-3 p-4 border border-blue-300 border-3 rounded-xl "
                  >
                    {editedQueries[query._id] ? (
                      <>
                        <input
                          type="text"
                          className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500"
                          name="question"
                          value={editedQueries[query._id].question}
                          onChange={(e) => onChange(e, query._id)}
                        />
                        <input
                          className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500"
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
                      <div className="">
                        <h5 className="font-bold">{query.question}</h5>
                        <p> {query.answer}</p>
                        <button
                          className="btn btn-info btn btn-primary bg-teal-500 hover:bg-green-700 text-white"
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
                      </div>
                    )}
                  </div>
                ))}
              </details>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Inbox;

import { useState } from "react";
import QueryContext from "./queryContext";
//updated
const QueryState = (props) => {
  const host = "http://localhost:5000";

  const [queries, setQueries] = useState([]);

  // Get all queries
  // const getallQueries = async (meetingId) => {
  //   try {
  //     const response = await fetch(`${host}/api/template/fetchallqueries`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "auth-token": localStorage.getItem("token"),
  //       },
  //     });

  //     const json = await response.json();
  //     console.log("jso get", json);
  //     setQueries(json);
  //   } catch (err) {
  //     console.log("problem occurred in getQueries", err.message);
  //   }
  // };

  // // Add a query
  // const addallQuery = async (question, answer, meeting_id, meeting_title) => {
  //   try {
  //     const response = await fetch(`${host}/api/template/addquery`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "auth-token": localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify(question, answer, meeting_id, meeting_title),
  //     });
  //     const responseData = await response.json();
  //     setQueries([...queries, responseData]);

  //     console.log("successfully,added :", queries);
  //   } catch (err) {
  //     console.log("problem occurred in addQuery", err.message);
  //   }
  // };
  const getQueries = async (meetingId) => {
    try {
      const response = await fetch(`${host}/api/queries/fetchallqueries`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      const json = await response.json();
      console.log("jso get", json);
      setQueries(json);
    } catch (err) {
      console.log("problem occurred in getQueries", err.message);
    }
  };

  // Add a query
  const addQuery = async (question, answer, meeting_id, meeting_title) => {
    try {
      const response = await fetch(`${host}/api/queries/addquery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(question, answer, meeting_id, meeting_title),
      });
      const responseData = await response.json();
      setQueries([...queries, responseData]);

      console.log("successfully,added :", queries);
    } catch (err) {
      console.log("problem occurred in addQuery", err.message);
    }
  };

  // Delete a query
  const deleteQuery = async (id) => {
    try {
      const response = await fetch(`${host}/api/queries/deletequery/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      if (response.ok) {
        const updatedQueries = queries.filter((query) => query._id !== id);
        setQueries(updatedQueries);
      } else {
        console.log("problem occurred in deleteQuery", json.message);
      }
    } catch (err) {
      console.log("problem occurred in deleteQuery", err.message);
    }
  };

  // Edit a query
  const editQuery = async (id, question, answer, meeting_id, meeting_title) => {
    try {
      const response = await fetch(`${host}/api/queries/updatequery/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          question,
          answer,
          meeting_id,
          meeting_title,
        }),
      });
      const updatedQuery = await response.json();
      if (response.ok) {
        const updatedQueries = queries.map((query) =>
          query._id === id ? updatedQuery : query
        );
        setQueries(updatedQueries);
      } else {
        console.log("problem occurred in editQuery", updatedQuery.message);
      }
    } catch (err) {
      console.log("problem occurred in editQuery", err.message);
    }
  };

  return (
    <QueryContext.Provider
      value={{
        queries,
        addQuery,
        deleteQuery,
        editQuery,
        getQueries,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryState;

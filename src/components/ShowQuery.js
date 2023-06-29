import React, { useEffect, useContext } from "react";
import QueryContext from "../context/queries/queryContext";

export default function ShowQuery(props) {
  const context = useContext(QueryContext);
  const { queries, getQueries } = context;
  console.log(queries);

  useEffect(() => {
    getQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-4">
      <h4>Queries:</h4>
      {queries.length > 0 ? (
        <ul className="list-group">
          {queries.map((query, index) => {
            if (query.answer !== "" && query.meeting_id === props.id) {
              return (
                <li key={index} className="list-group-item">
                  <h5>Question: {query.question}</h5>
                  <p>Answer: {query.answer}</p>
                </li>
              );
            } else {
              return null; 
            }
          })}
        </ul>
      ) : (
        <p>No queries available. {queries.length}</p>
      )}
      {queries.length > 0 &&
        !queries.some((query) => query.meeting_id === props.id) && (
          <p>No queries for this meeting.</p>
        )}
    </div>
  );
}

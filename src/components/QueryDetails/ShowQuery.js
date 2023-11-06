import React, { useEffect, useContext } from "react";
import QueryContext from "../../context/queries/queryContext";

export default function ShowQuery(props) {
  const context = useContext(QueryContext);
  const { queries, getQueries } = context;
  console.log(queries);

  useEffect(() => {
    getQueries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-4 bg-gray-800 rounded-lg p-6">
      <h4 className="text-gray-400 mb-8 text-3xl font-bold tracking-wide leading-relaxed uppercase text-center">
        Recent queries
      </h4>
      {queries.length > 0 ? (
        <ul className="divide-y divide-gray-700">
          {queries.map((query, index) => {
            if (query.answer !== "" && query.meeting_id === props.id) {
              return (
                <li key={index} className="py-4">
                  <h5 className="text-white mb-1 text-bold">
                    {index + 1}) {query.question}
                  </h5>
                  <p className="text-gray-400"> ✔️ {query.answer}</p>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      ) : (
        <p className="text-gray-400">No queries available. {queries.length}</p>
      )}
      {queries.length > 0 &&
        !queries.some((query) => query.meeting_id === props.id) && (
          <p className="text-gray-400">No queries for this meeting.</p>
        )}
    </div>
  );
}

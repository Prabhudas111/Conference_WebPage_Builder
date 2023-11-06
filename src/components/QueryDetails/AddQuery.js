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
    <div class="max-w-screen-xl mx-auto pl-10 pr-10 bg-gray-800">
      <div class="flex justify-center mx-n1.5">
        <div class="w-1/2 mx-auto  flex-none">
          <div class="box-border text-center block">
            <h4 class="text-gray-400 mb-8 text-m font-bold tracking-wide leading-relaxed  uppercase box-border block">
              Need Help? Ask your query below
            </h4>
            <form class="mb-10 box-border block mt-0 p-0 relative">
              <div class="relative flex flex-wrap items-stretch w-full box-border bg-gray-800">
                <input
                  placeholder="Enter your query here"
                  class="relative flex-1 min-w-0 w-full border border-gray-600 bg-gray-800 bg-opacity-20 rounded-l-3xl text-white resize-none h-12 font-normal leading-6 m-0 pr-4 pl-6 focus:outline-none focus:ring-0 custom-input-style"
                  name="search-field"
                  type="text"
                  fdprocessedid="d4x2c9"
                  value={equestion}
                  onChange={handleQuestionChange}
                />
                <span class="inline-block">
                  <button
                    type="submit"
                    // class="relative bg-red-600 text-white font-bold uppercase h-12 px-5 cursor-pointer select-none border-[2px] border-red-600 rounded-r-3xl hover:bg-black hover:border-black custom-button-style"
                    class="border-[2px] bg-red-600 uppercase custom-button-style  px-5 h-12 text-white text-sm relative overflow-hidden transition duration-300 hover:scale-102 hover:bg-black hover:shadow-lg btn primary"
                    fdprocessedid="gpcdhe"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </span>
                {/* <span class="custom-intersection-point"></span> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <h3 className="mt-4 mb-4">Query Form</h3>
    //   <form>
    //     <div className="form-group">
    //       <label htmlFor="questionInput">Query:</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="questionInput"
    // value={equestion}
    // onChange={handleQuestionChange}
    //       />
    //     </div>
    //     <button
    // onClick={handleSubmit}
    //       type="submit"
    //       className="btn btn-primary"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
};

export default AddQuery;

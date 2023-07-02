import React, { useContext } from "react";
import formContext from "../../context/forms/formContext";
import { Link } from "react-router-dom";

const FormItem = (props) => {
  const { deleteForm } = useContext(formContext);
  const { form, updateForm } = props;

  return (
    <>
      <div className="col-md-3 min-w-full">
        <div
          className="flex flex-col h-full card my-3 bg-white rounded-lg shadow-lg"
          style={{ border: "2px solid gray", padding: "1rem" }}
        >
          <div className="card-body flex flex-col justify-between">
            <h5 className="card-title text-lg font-semibold capitalize text-center mb-3">
              {form.title}
            </h5>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <i
                  className="far fa-trash-alt text-red-400 cursor-pointer mr-2 flex-shrink-0"
                  onClick={() => {
                    deleteForm(form._id);
                    props.showAlert("Deleted successfully", "success");
                  }}
                ></i>
                <i
                  className="far fa-edit text-blue-400 cursor-pointer flex-shrink-0"
                  onClick={() => {
                    updateForm(form);
                  }}
                ></i>
              </div>
              <Link
                to={`template/${form._id}`}
                className="text-white text-sm py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all duration-300 ease-in-out shadow-md flex-shrink-0"
                style={{ textDecoration: "none" }}
              >
                Get Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{form.title}</h5>
              <i
                className="fa-regular fa-trash-can mx-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteForm(form._id);
                  props.showAlert("Deleted successfully", "success");
                }}
              ></i>
              <i
                style={{ cursor: "pointer" }}
                className="fa-regular fa-pen-to-square mx-2"
                onClick={() => {
                  updateForm(form);
                }}
              ></i>
              <Link
                to={`template/${form._id}`}
                style={{
                  color: "black",
                  fontSize: "small",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Get Details
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FormItem;

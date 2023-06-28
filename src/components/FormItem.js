import React, { useContext } from "react";
import formContext from "../context/forms/formContext";
import { Link } from "react-router-dom";

const FormItem = (props) => {
  const { deleteForm } = useContext(formContext);
  const { form, updateForm } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{form.title}</h5>
            <i
              className="fa-regular fa-trash-can mx-2"
              onClick={() => {
                deleteForm(form._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i>
            <i
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
              }}
            >
              Get Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormItem;

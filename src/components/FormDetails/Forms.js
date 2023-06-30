// //Form
//changes done

import React, { useContext, useEffect, useRef, useState } from "react";
import formContext from "../../context/forms/formContext";
import FormItem from "./FormItem";
import AddForm from "./AddForm";

const Forms = (props) => {
  const context = useContext(formContext);
  const { forms, getForms, editForm } = context;
  // console.log("forms", forms.type);

  useEffect(() => {
    getForms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [form, setForm] = useState({
    id: "",
    etitle: "",
    edateTime: "",
    elocation: "",
    edescription: "",
    espeakers: "",
    eregistrationInfo: "",
    econtactInfo: "",
    eadditionalResources: "",
    eimage: "",
  });

  const updateForm = (currentForm) => {
    ref.current.click();
    setForm({
      id: currentForm._id,
      etitle: currentForm.title,
      edateTime: currentForm.dateTime,
      elocation: currentForm.location,
      edescription: currentForm.description,
      espeakers: currentForm.speakers,
      eregistrationInfo: currentForm.registrationInfo,
      econtactInfo: currentForm.contactInfo,
      eadditionalResources: currentForm.additionalResources,
      eimage: currentForm.image,
    });
  };

  const handleClick = () => {
    editForm(
      form.id,
      form.etitle,
      form.edateTime,
      form.elocation,
      form.edescription,
      form.espeakers,
      form.eregistrationInfo,
      form.econtactInfo,
      form.eadditionalResources,
      form.eimage
    );
    // console.log(forms);
    refClose.current.click();
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(forms);
  };

  return (
    <>
      <AddForm showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={form.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edateTime" className="form-label">
                    Date and Time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edateTime"
                    name="edateTime"
                    value={form.edateTime}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="elocation" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="elocation"
                    name="elocation"
                    value={form.elocation}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={form.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="espeakers" className="form-label">
                    Speakers
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="espeakers"
                    name="espeakers"
                    value={form.espeakers}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="eregistrationInfo" className="form-label">
                    Registration Info
                  </label>
                  <textarea
                    className="form-control"
                    id="eregistrationInfo"
                    name="eregistrationInfo"
                    value={form.eregistrationInfo}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="econtactInfo" className="form-label">
                    Contact Info
                  </label>
                  <textarea
                    className="form-control"
                    id="econtactInfo"
                    name="econtactInfo"
                    value={form.econtactInfo}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="eadditionalResources" className="form-label">
                    Additional Resources
                  </label>
                  <textarea
                    className="form-control"
                    id="eadditionalResources"
                    name="eadditionalResources"
                    value={form.eadditionalResources}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="eimage" className="form-label">
                    Image Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eimage"
                    name="eimage"
                    value={form.eimage}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  form.etitle.length < 5 || form.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Form
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="container my-4 mx-4">
          <strong>My Meetings</strong>
        </div>
        <div className="container mx-2">
          {forms.length === 0 && "No forms to display"}
        </div>
        {forms.map((form) => (
          <FormItem
            showAlert={props.showAlert}
            key={form._id}
            updateForm={updateForm}
            form={form}
          />
        ))}
      </div>
    </>
  );
};

export default Forms;

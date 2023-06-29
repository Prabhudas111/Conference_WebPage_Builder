import React, { useContext, useState } from "react";
import formContext from "../context/forms/formContext";

const AddForm = (props) => {
  const { addForm } = useContext(formContext);
  const [form, setForm] = useState({
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

  const handleForm = (e) => {
    e.preventDefault();

    addForm({
      title: form.etitle,
      dateTime: form.edateTime,
      location: form.elocation,
      description: form.edescription,
      speakers: form.espeakers,
      registrationInfo: form.eregistrationInfo,
      contactInfo: form.econtactInfo,
      additionalResources: form.eadditionalResources,
      image: form.eimage,
    });

    setForm({
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

    props.showAlert("Added successfully", "success");
  };

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container my-3">
      <h1>Add a Meeting</h1>

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
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="edateTime" className="form-label">
            Date
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
            Additional Info
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

        <button
          onClick={handleForm}
          type="button"
          className="btn btn-primary"
          // disabled={form.etitle.length < 5 || form.edescription.length < 5}
        >
          Get Website
        </button>
      </form>
    </div>
  );
};

export default AddForm;

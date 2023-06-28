import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
//changes done
//props.showAlert
const AddNote = (props) => {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({
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

  const handleNote = (e) => {
    e.preventDefault();
    // console.log("note", notes);
    addNote({
      title: note.etitle,
      dateTime: note.edateTime,
      location: note.elocation,
      description: note.edescription,
      speakers: note.espeakers,
      registrationInfo: note.eregistrationInfo,
      contactInfo: note.econtactInfo,
      additionalResources: note.eadditionalResources,
      image: note.eimage,
    });

    setNote({
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
    setNote({
      ...note,
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
            value={note.etitle}
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
            value={note.edateTime}
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
            value={note.elocation}
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
            value={note.edescription}
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
            value={note.espeakers}
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
            value={note.eregistrationInfo}
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
            value={note.econtactInfo}
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
            value={note.eadditionalResources}
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
            value={note.eimage}
            onChange={onChange}
          />
        </div>

        <button
          onClick={handleNote}
          type="button"
          className="btn btn-primary"
          // disabled={note.etitle.length < 5 || note.edescription.length < 5}
        >
          Get Website
        </button>
      </form>
    </div>
  );
};

export default AddNote;

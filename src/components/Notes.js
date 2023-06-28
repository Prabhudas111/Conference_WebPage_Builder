// //Form
//changes done

import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  // console.log("notes", notes.type);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
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

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edateTime: currentNote.dateTime,
      elocation: currentNote.location,
      edescription: currentNote.description,
      espeakers: currentNote.speakers,
      eregistrationInfo: currentNote.registrationInfo,
      econtactInfo: currentNote.contactInfo,
      eadditionalResources: currentNote.additionalResources,
      eimage: currentNote.image,
    });
  };

  const handleClick = () => {
    editNote(
      note.id,
      note.etitle,
      note.edateTime,
      note.elocation,
      note.edescription,
      note.espeakers,
      note.eregistrationInfo,
      note.econtactInfo,
      note.eadditionalResources,
      note.eimage
    );
    // console.log(notes);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    // console.log(notes);
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
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
                Edit Note
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
                    value={note.etitle}
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
                    Additional Resources
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
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
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
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => (
          <NoteItem
            showAlert={props.showAlert}
            key={note._id}
            updateNote={updateNote}
            note={note}
          />
        ))}
      </div>
    </>
  );
};

export default Notes;

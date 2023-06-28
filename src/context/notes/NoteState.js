//error solved and updated

import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  // Get all notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (err) {
      // console.error(err);

      console.log("prblm occurred");
    }
  };

  // Add a note

  const addNote = async (
    title,
    dateTime,
    location,
    description,
    speakers,
    registrationInfo,
    contactInfo,
    additionalResources,
    image
  ) => {
    try {
      // console.log("start", localStorage.getItem("token"));
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(
          title,
          dateTime,
          location,
          description,
          speakers,
          registrationInfo,
          contactInfo,
          additionalResources,
          image
        ),
      });
      // console.log("response", response);

      const responseText = await response.text();

      console.log("body rq", responseText);
      setNotes([...notes, responseText]);
      if (response.ok) {
        location.reload();
      }
    } catch (err) {
      // console.error(err);
      console.log(err.message);
      console.log("prblm occurred in addnote");
    }
  };

  //DELETE

  const deleteNote = async (id) => {
    try {
      // console.log("delete note with id", id);
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      const updatedNotes = notes.filter((note) => {
        return note._id !== id;
      });
      console.log("deleted", json);
      setNotes(updatedNotes);
    } catch (err) {
      console.error(err);
    }
  };

  // Edit a note
  const editNote = async (
    id,
    title,
    dateTime,
    location,
    description,
    speakers,
    registrationInfo,
    contactInfo,
    additionalResources,
    image
  ) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          dateTime,
          location,
          description,
          speakers,
          registrationInfo,
          contactInfo,
          additionalResources,
          image,
        }),
      });
      const updatedNote = await response.json();
      const updatedNotes = notes.map((note) =>
        note._id === id ? updatedNote : note
      );
      setNotes(updatedNotes);
    } catch (err) {
      // console.error(err);
      console.log("prblm occurred");
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

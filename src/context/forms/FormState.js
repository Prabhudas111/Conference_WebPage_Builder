//error solved and updated

import FormContext from "./formContext";
import { useState } from "react";

const FormState = (props) => {
  const host = "http://localhost:5000";

  const [forms, setForms] = useState([]);

  // Get all forms
  const getForms = async () => {
    try {
      const response = await fetch(`${host}/api/forms/fetchallforms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setForms(json);
    } catch (err) {
      // console.error(err);

      console.log("problem occurred in getForms");
    }
  };

  // Add a form

  const addForm = async (
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
      const response = await fetch(`${host}/api/forms/addform`, {
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
      setForms([...forms, responseText]);
      if (response.ok) {
        location.reload();
      }
    } catch (err) {
      // console.error(err);
      console.log(err.message);
      console.log("prblm occurred in addform");
    }
  };

  //DELETE

  const deleteForm = async (id) => {
    try {
      // console.log("delete form with id", id);
      const response = await fetch(`${host}/api/forms/deleteform/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      const updateForms = forms.filter((form) => {
        return form._id !== id;
      });
      console.log("deleted", json);
      setForms(updateForms);
    } catch (err) {
      console.error(err);
    }
  };

  // Edit a form
  const editForm = async (
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
      const response = await fetch(`${host}/api/forms/updateform/${id}`, {
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
      const updatedForm = await response.json();
      const updatedForms = forms.map((form) =>
        form._id === id ? updatedForm : form
      );
      setForms(updatedForms);
    } catch (err) {
      // console.error(err);
      console.log("prblm occurred");
    }
  };

  return (
    <FormContext.Provider
      value={{ forms, addForm, deleteForm, editForm, getForms }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;

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
  // const [userID, setUserID] = useState(0);
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
    // setUserID(currentForm.user);
  };
  // console.log("userID");
  // console.log(userID);

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
    // <div className="bg-gradient-to-b from-orange-500 via-white to-orange-500">
    <div className="  bg-gradient-to-br from-blue-800 to-cyan-400">
      <AddForm showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="invisible sr-only"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {" "}
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ marginTop: "90px" }}>
          <div className="modal-content bg-gradient-to-br from-blue-800 to-cyan-400">
            <div className="modal-header">
              <h5 className="modal-title text-white" id="exampleModalLabel">
                Edit Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form
              className="my-3 mt-3"
              style={{ width: "90%", margin: "0 auto" }}
            >
              <div className="w-full text-left ">
                <label htmlFor="etitle" className="mb-1 mt-2">
                  Title
                </label>
                <input
                  type="text"
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="etitle"
                  name="etitle"
                  value={form.etitle}
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>
              <div className="w-full text-left  m-3">
                <label htmlFor="edateTime" className="mb-1 mt-2">
                  Date and Time
                </label>
                <input
                  type="text"
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="edateTime"
                  name="edateTime"
                  value={form.edateTime}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="w-full text-left  m-3">
                <label htmlFor="elocation" className="mb-1 mt-2">
                  Location
                </label>
                <input
                  type="text"
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="elocation"
                  name="elocation"
                  value={form.elocation}
                  onChange={onChange}
                />
              </div>
              <div className="w-full text-left  m-3">
                <label htmlFor="edescription" className="mb-1 mt-2">
                  Description
                </label>
                <input
                  type="text"
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="edescription"
                  name="edescription"
                  value={form.edescription}
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>
              <div className="w-full text-left  m-3">
                <label htmlFor="espeakers" className="mb-1 mt-2">
                  Speakers
                </label>
                <input
                  type="text"
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="espeakers"
                  name="espeakers"
                  value={form.espeakers}
                  onChange={onChange}
                />
              </div>
              <div className="w-full text-left  m-3">
                <label htmlFor="eregistrationInfo" className="mb-1 mt-2">
                  Registration Info
                </label>
                <input
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="eregistrationInfo"
                  name="eregistrationInfo"
                  value={form.eregistrationInfo}
                  onChange={onChange}
                ></input>
              </div>
              <div className="w-full text-left  m-3">
                <label htmlFor="econtactInfo" className="mb-1 mt-2">
                  Contact Info
                </label>
                <input
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="econtactInfo"
                  name="econtactInfo"
                  value={form.econtactInfo}
                  onChange={onChange}
                ></input>
              </div>
              <div className="w-full text-left m-3 ">
                <label htmlFor="eadditionalResources" className="mb-2 ">
                  Additional Resources
                </label>
                <input
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="eadditionalResources"
                  name="eadditionalResources"
                  value={form.eadditionalResources}
                  onChange={onChange}
                ></input>
              </div>
              <div className="w-full text-left  m-3">
                <label htmlFor="eimage" className="mb-1 mt-2">
                  Image Link
                </label>
                <input
                  type="text"
                  className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
                  id="eimage"
                  name="eimage"
                  value={form.eimage}
                  onChange={onChange}
                />
              </div>
            </form>

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

      <div className="row mt-18">
        <div className="flex items-start justify-center mt-12 pb-5">
          <strong className="text-white text-4xl">My Meetings</strong>
        </div>

        <div className="grid grid-cols-3 gap-3 grid-flow-row">
          {forms.length === 0 && "No forms to display"}

          {forms.map((form) => (
            <FormItem
              showAlert={props.showAlert}
              key={form._id}
              updateForm={updateForm}
              form={form}
              className="min-w-0"
            />
          ))}

          {/* {forms
            .filter((form) => form.user === userID) // Filter the forms based on the user's unique ID
            .map((form) => (
              <FormItem
                showAlert={props.showAlert}
                key={form._id}
                updateForm={updateForm}
                form={form}
                className="min-w-0"
              />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Forms;

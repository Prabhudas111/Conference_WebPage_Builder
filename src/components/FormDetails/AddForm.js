import React, { useContext, useState } from "react";
import formContext from "../../context/forms/formContext";

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
    <div className="mx-5 px-3 py-9 ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 mt-16 text-center pb-3">
        Create New Meeting
      </h1>

      <form
        className="my-3 pt-10 p-4 rounded-lg"
        style={{ width: "50%", margin: "0 auto" }}
      >
        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="etitle"
            className="mb-2"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Title
          </label>
          <input
            type="text"
            className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
            id="etitle"
            name="etitle"
            value={form.etitle}
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="edateTime"
            className="block mb-1 "
            style={{ color: "black", fontWeight: "bold" }}
          >
            Date
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

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="elocation"
            className="block mb-1"
            style={{ color: "black", fontWeight: "bold" }}
          >
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

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="edescription"
            className="block mb-1 "
            style={{ color: "black", fontWeight: "bold" }}
          >
            Description
          </label>
          <input
            type="text"
            className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
            id="edescription"
            name="edescription"
            value={form.edescription}
            onChange={onChange}
            required
          />
        </div>

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="espeakers"
            className="block mb-1"
            style={{ color: "black", fontWeight: "bold" }}
          >
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

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="eregistrationInfo"
            className="block mb-1 "
            style={{ color: "black", fontWeight: "bold" }}
          >
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

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="econtactInfo"
            className="block mb-1 "
            style={{ color: "black", fontWeight: "bold" }}
          >
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

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="eadditionalResources"
            className="block mb-1 "
            style={{ color: "black", fontWeight: "bold" }}
          >
            Additional Info
          </label>
          <input
            className="form-input w-full border border-gray-300 rounded-lg py-2 px-3 transition-colors duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-400"
            id="eadditionalResources"
            name="eadditionalResources"
            value={form.eadditionalResources}
            onChange={onChange}
          ></input>
        </div>

        <div className="w-100 flex flex-col items-start">
          <label
            htmlFor="eimage"
            className="block mb-1 "
            style={{ color: "black", fontWeight: "bold" }}
          >
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

        <button
          onClick={handleForm}
          type="button"
          className="btn text-white bg-gradient-to-br from-blue-800 to-cyan-400 mt-4 p-3"
          // disabled={form.etitle.length < 5 || form.edescription.length < 5}
        >
          Get Website
        </button>
      </form>
    </div>
  );
};

export default AddForm;

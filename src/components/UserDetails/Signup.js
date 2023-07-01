import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      // Passwords don't match, handle the error
      props.showAlert("password do not match", "danger");
      return;
    }

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const json = await response.json();
    console.log(json);

    // if (json.success) {
    localStorage.setItem("token", json.authToken);
    navigate("/formpage");
    props.showAlert("Account created successfully", "success");
    // } else {
    // props.showAlert("Invalid Details", "danger");
    // }
  };

  const onChange = (val) => {
    setCredentials({ ...credentials, [val.target.name]: val.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
      <h1 className="font-bold my-3 text-3xl ">Create Account</h1>

      <input
        type="text"
        placeholder="Name"
        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3"
        id="name"
        name="name"
        onChange={onChange}
        aria-describedby="emailHelp"
      />
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3"
        id="email"
        name="email"
        aria-describedby="emailHelp"
        onChange={onChange}
      />
      <input
        type="password"
        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3"
        id="password"
        name="password"
        onChange={onChange}
        minLength={5}
        required
        placeholder="Password"
      />
      <input
        type="password"
        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3"
        id="cpassword"
        name="cpassword"
        onChange={onChange}
        minLength={5}
        required
        placeholder="Confirm Password"
      />
      <button
        type="submit"
        className="bg-[#FF4455] text-white px-4 py-2 rounded-md my-3"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;

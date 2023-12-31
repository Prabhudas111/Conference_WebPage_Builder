import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const LoginItem = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      //save the authToken
      localStorage.setItem("token", json.authToken);
      props.showAlert("logged in successfully", "success");
      navigate("/formpage");
      //redirect
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (val) => {
    setCredentials({ ...credentials, [val.target.name]: val.target.value });
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
      <h1 className="text-4xl font-bold mb-4">Log in</h1>

      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3"
        id="email"
        name="email"
        onChange={onChange}
        aria-describedby="emailHelp"
        value={credentials.email}
      />

      <input
        type="password"
        name="password"
        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3"
        placeholder="Password"
        value={credentials.password}
        id="exampleInputPassword1"
        onChange={onChange}
      />
      <a href="/" className="text-blue-500 text-sm mb-3 inline-block">
        Forgot password?
      </a>
      <button
        type="submit"
        className="bg-[#FF4455] text-white px-4 py-2 rounded-md"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginItem;

// <div className="mt-3 ">

//   <h2>Login</h2>
//   <form onSubmit={handleSubmit}>
//     <div className="mb-3">
//       <label htmlFor="email" className="form-label">
//         Email address
//       </label>
//       <input
//         type="email"
//         className="form-control"
//         id="email"
//         name="email"
//         value={credentials.email}
//         aria-describedby="emailHelp"
//         onChange={onChange}
//       />
// <div id="emailHelp" className="form-text">
//   We'll never share your email with anyone else.
// </div>
//     </div>
//     <div className="mb-3">
//       <label htmlFor="password" className="form-label">
//         Password
//       </label>
//       <input
//         type="password"
//         name="password"
//         value={credentials.password}
//         className="form-control"
//         id="exampleInputPassword1"
//         onChange={onChange}
//       />
//     </div>

//     <button type="submit" className="btn btn-primary">
//       Submit
//     </button>
//   </form>
// </div>

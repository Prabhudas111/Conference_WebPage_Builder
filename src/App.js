import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import FormState from "./context/forms/FormState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FormPage from "./components/FormPage";
import Template from "./components/Template";
import Inbox from "./components/Inbox";
import QueryState from "./context/queries/QueryState";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const isAuthenticated = true; // Replace with your authentication logic

  return (
    <QueryState>
    <FormState>
      <Router>
        <NavBar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/about"
              element={<About showAlert={showAlert} />}
            />
            <Route
              exact
              path="/formpage"
              element={<FormPage showAlert={showAlert} />}
            />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            />
            <Route
              exact
              path="/formpage/template/:id"
              element={<Template showAlert={showAlert} />}
            />
            <Route
              path="/template/:id"
              element={<Template showAlert={showAlert} />}
            />
            <Route
              exact
              path="/inbox"
              element={<Inbox showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </FormState>
    </QueryState>
  );
}

export default App;

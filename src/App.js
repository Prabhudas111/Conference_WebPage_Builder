import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/NavBar_Icons/Home";
import About from "./components/NavBar_Icons/About";
import FormState from "./context/forms/FormState";
import Alert from "./components/Alert";
import Login from "./components/UserDetails/Login";
import Signup from "./components/UserDetails/Signup";
import FormPage from "./components/FormDetails/FormPage";
import Template from "./components/CustomTemplates/Template";
import Inbox from "./components/NavBar_Icons/Inbox";
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
  return (
    <QueryState>
      <FormState>
        <Router>
          <Alert alert={alert} />
          <Routes className="container">
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
        </Router>
      </FormState>
    </QueryState>
  );
}

export default App;


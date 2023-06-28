import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//changes done
const NavBar = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const renderMeetingsButton = () => {
    if (localStorage.getItem("token")) {
      return (
        <li className="nav-item">
          <Link
            className={`nav-link ${
              location.pathname === "/formpage" ? "active" : ""
            }`}
            to="/formpage"
          >
            Meetings
          </Link>
        </li>
      );
    }
    return null;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Conference
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            {renderMeetingsButton()}
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex" role="search">
              <Link
                className="btn btn-primary bg-dark mx-1"
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-primary bg-dark mx-1"
                to="/signup"
                role="button"
              >
                Sign up
              </Link>
            </form>
          ) : (
            <button
              onClick={handleLogout}
              className="btn btn-primary bg-dark mx-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

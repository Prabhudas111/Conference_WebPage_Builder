import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import "./NavbarStyle.css";
const NavBar = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const renderMeetingsButton = () => {
    if (localStorage.getItem("token")) {
      return (
        <Link
          className={`nav-link ${
            location.pathname === "/formpage" ? "active font-bold" : ""
          }`}
          to="/formpage"
        >
          Meetings
        </Link>
      );
    }
    return null;
  };

  const renderQueryButton = () => {
    if (localStorage.getItem("token")) {
      return (
        <Link
          className={`nav-link ${
            location.pathname === "/inbox" ? "active font-bold" : ""
          }`}
          to="/inbox"
        >
          Inbox
        </Link>
      );
    }
    return null;
  };

  return (
    <nav className="NavbarItems">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z"
          clip-rule="evenodd"
        />
      </svg>

      <div className="menu-icons" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            className={`nav-link ${
              location.pathname === "/" ? "font-bold" : "text-gray-700"
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`nav-link ${
              location.pathname === "/about" ? "font-bold" : "text-gray-700"
            }`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>{renderMeetingsButton()}</li>
        <li>{renderQueryButton()}</li>
      </ul>

      {!localStorage.getItem("token") ? (
        <li style={{ listStyleType: "none" }}>
          <Link className="nav-link" to="/login" role="button">
            <BiSolidUserCircle className="text-3xl text-black" />
          </Link>
        </li>
      ) : (
        <button onClick={handleLogout} className="nav-link">
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBar;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { BiSolidUserCircle } from "react-icons/bi";

// const NavBar = () => {
//   let navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const renderMeetingsButton = () => {
//     if (localStorage.getItem("token")) {
//       return (
//         <li className="nav-item">
//           <Link
//             className={`nav-link ${
//               location.pathname === "/formpage" ? "active" : ""
//             }`}
//             to="/formpage"
//           >
//             Meetings
//           </Link>
//         </li>
//       );
//     }
//     return null;
//   };

//   const renderQueryButton = () => {
//     if (localStorage.getItem("token")) {
//       return (
//         <li className="nav-item">
//           <Link
//             className={`nav-link ${
//               location.pathname === "/inbox" ? "active" : ""
//             }`}
//             to="/inbox"
//           >
//             Inbox
//           </Link>
//         </li>
//       );
//     }
//     return null;
//   };

//   return (
//     <nav className="bg-white" style={{ height: "50px" }}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <Link className="text-xl font-bold" to="/">
//             Conference
//           </Link>
//           <button
//             className="block lg:hidden border border-gray-500 rounded px-3 py-2 focus:outline-none focus:border-gray-700"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="hidden lg:block">
//             <ul className="flex space-x-4">
//               <li>
//                 <Link
//                   className={`${
//                     location.pathname === "/" ? "font-bold" : "text-gray-700"
//                   }`}
//                   to="/"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className={`${
//                     location.pathname === "/about"
//                       ? "font-bold"
//                       : "text-gray-700"
//                   }`}
//                   to="/about"
//                 >
//                   About
//                 </Link>
//               </li>
//               {renderMeetingsButton()}
//               {renderQueryButton()}
//             </ul>
//           </div>
//           {!localStorage.getItem("token") ? (
//             <Link className="mx-1" to="/login" role="button">
//               <BiSolidUserCircle className="text-3xl text-black" />
//             </Link>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="btn btn-primary bg-dark mx-2"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// // {!localStorage.getItem("token") ? (
// //   (
// //     <form className="d-flex" role="search">
// //       <Link
// //         className="btn btn-primary bg-dark mx-1"
// //         to="/login"
// //         role="button"
// //       >
// //         Login
// //       </Link>
// //       <Link
// //         className="btn btn-primary bg-dark mx-1"
// //         to="/signup"
// //         role="button"
// //       >
// //         Sign up
// //       </Link>
// //     </form>
// //   )

// // ) : (
// //   <button
// //     onClick={handleLogout}
// //     className="btn btn-primary bg-dark mx-2"
// //   >
// //     Logout
// //   </button>
// // )}

import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Link } from "react-router-dom";

const NoteItem = (props) => {
  const { deleteNote } = useContext(noteContext);
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-regular fa-trash-can mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <Link
              to={`template/${note._id}`}
              style={{
                color: "black",
                fontSize: "small",
                textDecoration: "none",
              }}
            >
              Get Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

// import React, { useContext } from "react";
// import noteContext from "../context/notes/noteContext";
// import { Link } from "react-router-dom";
// // title,
// // dateTime,
// // location,
// // description,
// // speakers,
// // registrationInfo,
// // contactInfo,
// // additionalResources,
// // image
// const NoteItem = (props) => {
//   const { deleteNote } = useContext(noteContext);
//   const { note, updateNote } = props;
//   return (
//     <div className="col-md-3">
//       <div className="card my-3">
//         <div className="card-body">
//           <div className="d-flex align-items-center">
//             <h5 className="card-title">{note.title}</h5>
//             <i
//               className="fa-regular fa-trash-can mx-2"
//               onClick={() => {
//                 deleteNote(note._id);
//                 props.showAlert("Deleted successfully", "success");
//               }}
//             ></i>
//             <i
//               className="fa-regular fa-pen-to-square mx-2"
//               onClick={() => {
//                 updateNote(note);
//               }}
//             ></i>
//             <Link to={`http://localhost:5000/${note._id}`}>Get Details</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoteItem;

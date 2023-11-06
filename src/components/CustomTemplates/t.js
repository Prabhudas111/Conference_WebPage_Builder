// import React, { useContext, useEffect } from "react";
// import formContext from "../../context/forms/formContext";
// import { useParams } from "react-router-dom";

// import AddQuery from "../QueryDetails/AddQuery";
// import ShowQuery from "../QueryDetails/ShowQuery";

// const Page = (props) => {
//   const context = useContext(formContext);
//   const { forms, getForms } = context;

//   const { id } = useParams();
//   useEffect(() => {
//     getForms();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // const navigate = useNavigate();

//   const filteredForm = forms.find((form) => form._id === id);

//   if (!filteredForm) {
//     // logout();
//     // navigate("/", { replace: true });
//     return <h1>Meeting not found</h1>;
//   }

//   return (
//     <div className="container">
//       <h3 className="mt-4 mb-4">This is the Page Page</h3>
//       <div className="card">
//         <div className="card-body">
//           <h2 className="card-title">{filteredForm.title}</h2>
//           <p className="card-text">Date and Time: {filteredForm.dateTime}</p>
//           <p className="card-text">Location: {filteredForm.location}</p>
//           <p className="card-text">Description: {filteredForm.description}</p>
//           <p className="card-text">Speakers: {filteredForm.speakers}</p>
//           <p className="card-text">
//             Registration Info: {filteredForm.registrationInfo}
//           </p>
//           <p className="card-text">Contact Info: {filteredForm.contactInfo}</p>
//           <p className="card-text">
//             Additional Resources: {filteredForm.additionalResources}
//           </p>
//           <img src={filteredForm.image} alt="Event" className="img-fluid" />
//         </div>
//       </div>
//       <QueryService
//         showAlert={props.showAlert}
//         id={id}
//         title={filteredForm.title}
//       />

//       <AddQuery
//         showAlert={props.showAlert}
//         id={id}
//         title={filteredForm.title}
//       />
//       <ShowQuery showAlert={props.showAlert} id={id} />
//     </div>
//   );
// };

// export default Page;

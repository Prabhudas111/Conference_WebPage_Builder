import React from "react";
import Notes from "./Notes";
const FormPage = (props) => {
  return (
    <div>
      <Notes showAlert={props.showAlert} />
    </div>
  );
};

export default FormPage;

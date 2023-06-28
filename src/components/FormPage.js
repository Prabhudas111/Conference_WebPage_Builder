import React from "react";
import Forms from "./Forms";
const FormPage = (props) => {
  return (
    <div>
      <Forms showAlert={props.showAlert} />
    </div>
  );
};

export default FormPage;

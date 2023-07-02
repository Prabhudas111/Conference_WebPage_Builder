import React from "react";
import Forms from "./Forms";
const FormPage = (props) => {
  return (
    <>
      <Forms showAlert={props.showAlert} />
    </>
  );
};

export default FormPage;

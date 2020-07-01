import React from "react";
import spinner from "../images/spinner.gif";
const style = {
  width: "150px",
  height: "150px",
};

export const Spinner = () => {
  return <img src={spinner} alt="Spinner" style={style} />;
};

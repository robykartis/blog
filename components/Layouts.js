/** @format */

import React from "react";
import Navbar from "./Navbar";

function Layouts(props) {
  return (
    <>
      <Navbar />
      <div className="container mt-5">{props.children}</div>
    </>
  );
}

export default Layouts;

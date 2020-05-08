import React from "react";
import "../../mainPage.css";

const Loader = () => {
  return (
    <div className="backdrop">
      <div className="circular-progress"></div>
    </div>
  );
};

export default Loader;

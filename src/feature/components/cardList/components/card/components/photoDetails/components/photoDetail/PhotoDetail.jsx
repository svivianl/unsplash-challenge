import React from "react";
import "./photoDetail.css";

const PhotoDetail = ({ label, value }) => {
  return (
    <div>
      {label}: <span>{value}</span>
    </div>
  );
};

export default PhotoDetail;

import React from "react";
import "./photoDetail.css";

const PhotoDetail = ({ label, value, children }) => {
  return (
    <div>
      <strong>{label}:</strong> {children} <span>{value}</span>
    </div>
  );
};

export default PhotoDetail;

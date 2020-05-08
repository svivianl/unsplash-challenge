import React from "react";
import className from "classnames";
import "./photoDetailView.css";

const PhotoDetailView = ({ label, value, alignCenter = false, children }) => {
  return (
    <div className={className("detail", alignCenter ? "align-center" : null)}>
      <strong>{label}:</strong> {children} <span>{value}</span>
    </div>
  );
};

export default PhotoDetailView;

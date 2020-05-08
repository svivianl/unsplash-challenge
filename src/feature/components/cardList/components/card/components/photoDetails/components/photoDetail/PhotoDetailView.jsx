import React from "react";
import "./photoDetailView.css";

const PhotoDetailView = ({ label, value, children }) => {
  return (
    <div className="detail">
      <strong>{label}:</strong> {children} <span>{value}</span>
    </div>
  );
};

export default PhotoDetailView;

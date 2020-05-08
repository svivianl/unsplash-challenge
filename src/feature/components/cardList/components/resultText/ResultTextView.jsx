import React from "react";

const ResultTextView = ({ error, total }) => {
  return error ? (
    <p>{error}</p>
  ) : (
    <p>
      Found <strong>{total}</strong> images
    </p>
  );
};

export default ResultTextView;

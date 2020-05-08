import React from "react";

const ResultText = ({ error, total }) => {
  return error ? (
    <p>{error}</p>
  ) : (
    <p>
      Found <strong>{total}</strong> results
    </p>
  );
};

export default ResultText;

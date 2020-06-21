import React from "react";
import { orientations } from "../../../store/types";
import "./orientations.css";

const Orientations = ({ orientation, setOrientation }) => {
  return (
    <div className="orientations">
      <h5>Orientation:</h5>
      <div className="orientation" onClick={() => setOrientation("")}>
        <input
          type="radio"
          id="all"
          value="all"
          checked={!orientation}
          onChange={() => setOrientation("")}
        />
        all
      </div>
      {orientations.map((type) => (
        <div
          className="orientation"
          key={type}
          onClick={() => setOrientation(type)}
        >
          <input
            type="radio"
            id={type}
            value={type}
            checked={orientation === type}
            onChange={() => setOrientation(type)}
          />
          {type}
        </div>
      ))}
    </div>
  );
};

export default Orientations;

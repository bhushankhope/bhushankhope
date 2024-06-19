import React from 'react';
import './FancySocial.css';

const FancySocial = ({ props }) => {
  return (
    <button
      className="fancy-btn"
      style={{ backgroundColor: props.bgc, borderColor: props.borderColor }}
    >
      <a href={props.link} target="_blank" style={{ color: props.borderColor }} download>
        <img
          src={`src/assets/tech/${props.filename}.svg`}
          style={{ fill: 'currentColor' }}
        ></img>
        <span className="label">
          {props.reqd && '/'} {props.label}
        </span>
      </a>
    </button>
  );
};

export default FancySocial;

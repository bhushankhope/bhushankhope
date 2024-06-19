import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ props }) => {
  return (
    <button className="download-btn">
      <a href={props.link} download>
        <img
          src={`src/assets/tech/${props.filename}.svg`}
          style={{ fill: 'currentColor' }}
        ></img>
        <span className="texts">Download Resume</span>
      </a>
    </button>
  );
};

export default DownloadButton;

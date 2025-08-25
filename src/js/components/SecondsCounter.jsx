import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';
import '../../styles/index.css';

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, '0').split('');

  return (
    <div className="counter-container">
      <div className="counter-box clock-icon-box">
        <FontAwesomeIcon icon={faClock} />
      </div>
      {digits.map((digit, index) => (
        <div key={index} className="counter-box">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
import React from 'react';
import './SlideButton.scss'

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
  </button>
);

export default SlideButton;
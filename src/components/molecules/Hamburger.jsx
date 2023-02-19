import React from 'react';

const Hamburger = ({isActive, handleHamburger}) => {


    return (
        <button className={`hamburger hamburger--arrowturn ${isActive}`} type="button" onClick={handleHamburger}>
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
        </button>
    )
}

export default Hamburger;
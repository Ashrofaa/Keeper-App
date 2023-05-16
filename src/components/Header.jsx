import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1 className="header-text">Keeper</h1>
      <button className="header-btn" onClick={() => props.setIsVisible(true)}>
        <span>+</span>
      </button>
    </div>
  );
}

export default Header;

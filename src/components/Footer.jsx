import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return <p className="footer-text">copyright © {currentYear}</p>;
}

export default Footer;

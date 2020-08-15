import React, { useState, useEffect } from "react";

import "./styles.css";

import "../Nav/Nav";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="navAvatar"
        src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
        alt="User"
      />
    </div>
  );
}

export default Nav;

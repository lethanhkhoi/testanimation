import React from "react";
import "./Sidebar.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <Link className="sidebar-menu" to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
    </>
  );
};

export default Sidebar;

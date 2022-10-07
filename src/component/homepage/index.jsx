import React, { useRef } from "react";
import "./index.css";

const HomePage = () => {
  const menu = useRef();
  const handleClick = () => {
    menu.current.classList.toggle("active");
  };
  return (
    <>
      <ul className="menu" ref={menu}>
        <div class="toggle" onClick={handleClick}>
          <ion-icon name="add-outline"></ion-icon>
        </div>
        <li style={{ "--i": 1, "--clr": "#fee809" }}>
          <a href="#">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 2, "--clr": "#04fc43" }}>
          <a href="#">
            <ion-icon name="cloud-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 3, "--clr": "#fe00f1" }}>
          <a href="#">
            <ion-icon name="bookmark-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 4, "--clr": "#00b0fe" }}>
          <a href="#">
            <ion-icon name="balloon-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 5, "--clr": "#fea600" }}>
          <a href="#">
            <ion-icon name="alarm-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": "6", "--clr": "#a529ff" }}>
          <a href="#">
            <ion-icon name="airplane-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": "7", "--clr": "#01bdab" }}>
          <a href="#">
            <ion-icon name="camera-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </>
  );
};
export default HomePage;

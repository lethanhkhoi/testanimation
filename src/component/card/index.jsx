import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./index.css";

const Card = () => {
  return (
    <>
      <Sidebar />
      <div className="card-container" style={{"width":"100%"}}>
        <div className="card">
          <div className="imgBox">
            <img src="/assets/traidep.jpg"></img>
            <img src="/assets/test2.jpg"></img>
          </div>
          <div className="details">
            <div className="content">
              <h2>
                Le Thanh Khoi <br />
                <span>Developer</span>
              </h2>
              <div className="social-icons">
                <a className="card-link" href="https://www.facebook.com/tkoii.810/" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="card-link" href="https://www.instagram.com/lethanhkhoii/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="card-link" href="https://www.linkedin.com/in/th%C3%A0nh-kh%C3%B4i-l%C3%AA-042232237/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

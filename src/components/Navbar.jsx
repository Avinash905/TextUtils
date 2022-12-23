import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar shadow navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid ">
          <NavLink
            className={`navbar-brand text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            to="/"
          >
            TextUtils
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="color-toggle mx-2">
            <label
              className={`mx-2 form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              Themes
            </label>
            <button
              className="btn-danger toggle-btn btn mx-1 rounded-circle"
              onClick={props.toggle}
            ></button>
            <button
              className="btn-warning toggle-btn btn mx-1 rounded-circle"
              onClick={props.toggle}
            ></button>
            <button
              className="btn-success toggle-btn btn mx-1 rounded-circle"
              onClick={props.toggle}
            ></button>
            <button
              className="btn-info toggle-btn btn mx-1 rounded-circle"
              onClick={props.toggle}
            ></button>
            <button
              className="btn-light btn mx-1 white-btn rounded-circle"
              onClick={props.toggle}
            ></button>
            <button
              className="btn-dark toggle-btn btn mx-1  rounded-circle"
              onClick={props.toggle}
            ></button>
          </div>
        </div>
      </nav>
    </>
  );
}

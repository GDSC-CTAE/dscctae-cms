import React, { useState } from "react";
import Sidenav from "../Sidenav/sidenav";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { Link, Navigate, Outlet } from "react-router-dom";
import Events from "../Events/events";
import "./dashboard.css";
import { SidebarData } from "../Data/data";
import { SignOut } from "../Helper/firebase";
import { useNavigate } from "react-router-dom";
import Login from "../login-page/login";

export default function DashBoard() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const userPresent = sessionStorage.getItem("token");
  const navigate = useNavigate();
  function userLogout() {
    const userResponse = SignOut();
    if (userResponse) {
      navigate("/");
    } else {
      alert("There is some issue in logging out the User.");
    }
  }

  return (
    <>
      {userPresent ? (
        <div>
          <div className="navbar p-3">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars className="bar-icon" onClick={showSidebar} />
            </Link>
            <div>
              <h6 className="text-muted">Developer Students Club , CTAE </h6>
            </div>
          </div>
          <div className={sidebar ? "main-content active" : "main-content"}>
            <Outlet />
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items w-100">
              <li className="navbar-toggle p-1">
                <AiIcons.AiOutlineClose className="close-bars" onClick={showSidebar} />
              </li>
              {SidebarData.map((item, index) => {
                return <Sidenav menu={item} key={index} />;
              })}
              <div className="user-profile">
                <h5 className="text-muted">
                  Super Admin
                  <MdIcons.MdLogout className="logout-button" onClick={userLogout} />
                </h5>
              </div>
            </ul>
          </nav>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

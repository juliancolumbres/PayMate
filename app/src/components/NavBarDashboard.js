import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import logo from "./logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../base";
import { AuthContext } from "../context/auth";
import { Button } from "react-bootstrap";
import * as ReactStrap from "reactstrap";

function NavBarDashboard() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const handleSignout = async () => {
    await signOut(auth);
    history.replace("/login");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="user-nav">
          <ReactStrap.Navbar dark expand="md" variant="light">
            <ReactStrap.NavbarBrand
              className="logo d-flex align-items-end"
              href="/"
            >
              paymate
            </ReactStrap.NavbarBrand>
            <ReactStrap.Nav navbar>
              <ReactStrap.NavbarBrand className="text-center" >dashboard</ReactStrap.NavbarBrand>
            </ReactStrap.Nav>

            <ReactStrap.Nav className="ml-auto the-nav" navbar>
              <ReactStrap.NavLink href="/login">
                <Button onClick={handleSignout} className="signout-custom">sign out</Button>
              </ReactStrap.NavLink>
            </ReactStrap.Nav>
          </ReactStrap.Navbar>
        </div>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <li >
              <Link to="#" className="navbar-toggle" >
               
              <img src={logo} alt="Logo" className="logo" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBarDashboard;

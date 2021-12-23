import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import logo from "./logo.png";
// import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars  />
          </Link> */}
          {/* profile */}
          {/* <Navbar> 
            <Container>
              <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
        </div>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
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

export default NavBar;

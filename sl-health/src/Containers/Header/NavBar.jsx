import React from "react";
import "./navbar.css";
import MenuIcon from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import NavBtn from "../../Components/navBtn"
//import logo from '../../Assets/logo.svg';

function NavBar() {
  return (
    <nav className="navibar">
      <div className="navibar-links">
        <Link to='/' className="navibar-links_logo">
          SL-HEALTH
        </Link>

        <ul className="nav-items">
          <div>
          {navItems.map(item => {
            return(
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
            );
          })} 
          </div>
         <div className="loginbtn">
            <NavBtn />
          </div>
        </ul>

      </div>
    </nav>
  );
}

export default NavBar;
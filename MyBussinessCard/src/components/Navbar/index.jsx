import React from 'react';
import { navItems } from "./NavItems";
import { FaBars } from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './Navbar.Element';

const NavBar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>JONI</NavLogo>
                <NavMenu>
                    {navItems.map(item => {
                        return(
                        <NavItem key={item.id} className={item.cName}>
                        <NavLinks to={item.path}>{item.title}</NavLinks>
                        </NavItem>
                        );
                    })} 
                </NavMenu>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default NavBar
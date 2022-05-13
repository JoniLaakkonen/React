import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkSc } from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;

    background: transparent;
    width: 100%;
    height: 8vh;
    top: 0;
    left: 0;
    
    z-index: 10;
    overflow: hidden;
    @media screen and (max-width: 960px) {
        transition: 800ms all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 8vh;
    z-index: 1;
    width: 100%;
    padding: 0 1rem;
`
export const NavLogo = styled(LinkR)`
    display: flex;
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    align-items: center;
    margin-left: 5rem;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
        display: block;
        float: right;
        top: 0;
        right: 0;
        transform: translate(-250%, 30%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;

        &:hover {
            transition: all 0.2s ease-in-out;
            font-size: 1.9rem;
        }

`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 8vh;
`
export const NavLinks = styled(LinkSc)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
            transition: all 0.2s ease-in-out;
            font-size: 1.4rem;
            color: var(--color-navtxt);
        }
    &.active {
        border-bottom: 3px solid #01bf71;
    }

`
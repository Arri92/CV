import React from 'react'
import { FaBars } from 'react-icons/fa'
import { MobileIcon, Nav, NavbarCon, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavLogoS, NavMenu } from './NavbarElement'
import Logo2 from './Logo2.png'
import Logomin from './Logomin.png'
import {AiFillPhone, AiFillLinkedin} from 'react-icons/ai'
import {GoMention} from 'react-icons/go'

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarCon>
                <NavLogo src={Logo2} />
                <NavLogoS src={Logomin} />
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to='home'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='skills'>Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='portfolio'>Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink ><AiFillPhone onClick={() =>  navigator.clipboard.writeText('+48602661108')} href="tel:+48602661108" /></NavBtnLink>
               
                    <NavBtnLink ><GoMention onClick={() =>  navigator.clipboard.writeText('szkaradek.mariusz@gmail.com')} href="szkaradek.mariusz@gmail.com"/></NavBtnLink>
                
                    <NavBtnLink ><AiFillLinkedin href="https://www.linkedin.com/mwlite/in/mariusz-szkaradek-285590159" /></NavBtnLink>
                </NavBtn>
            </NavbarCon>
        </Nav>
            
        </>
    )
}

export default Navbar

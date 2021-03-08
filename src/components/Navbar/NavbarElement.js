import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen  and (max-whidth: 960px){
    transition: 0.8s all ease;
}
`
export const  NavbarCon = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 110000px;
`
export const NavLogo = styled.img`
margin-top: -20px;
margin-bottom: -20px;
pointer-events: none;
@media screen and (max-width: 500px){
    display: none;
    margin-top: -20px;
    margin-bottom: -20px;
    pointer-events: none;
}
`

export const NavLogoS = styled.img`
display:none;
pointer-events: none;
@media screen and (max-width: 500px){
    display: block;
    block-size: 50%;
    margin-top: 20px;
    
}
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 800px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #a03fe0;
}

&:hover{
    top:-4px;
    right:-4px;
    font-size: 2rem;
    transition: all 0.2s ease-in-out;
    color: #e499ee;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: - 22px;

@media screen and (max-width: 800px){
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom:3px solid #01bf71;
}
`

export const NavBtn =styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 800px){
    margin-right: 40px;
    }
`

export const NavBtnLink = styled(LinkR)`
border-radius: 10px;
white-space: nowrap;
padding: 5px 5px;
color: #a03fe0;
font-size: 23px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin:10px;

&:hover{
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
    color: #e499ee;
}
`
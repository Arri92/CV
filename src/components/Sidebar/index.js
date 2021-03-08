import React from 'react'
import { CloseIcon, Icon, SidebarCon, SidebarLink, SidebarMenu, SidebarWrap } from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarCon isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrap>
                <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrap>
        </SidebarCon>
        
    )
}

export default Sidebar

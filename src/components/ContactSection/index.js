import React from 'react'
import { Contact, ContactContainer, ContactWrapper, HereImg, HereImgWrapper, HereText, HereTitle, HireMeWrapper } from './ContactElement'
import css from "./css.png";
import Boot from "./Bootstrap.png"
import html from "./HTML 5.png"
import npm from "./npm.png"
import Rea from "./React.png"
import sass from "./sass.png"
const ContactSection = () => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <HireMeWrapper>
                    <HereTitle>Hire Me!</HereTitle>
                    <HereText>Connect with me via phone: 602661108 or email: szkaradek.mariusz@gmail.com. 
                        For more information <a href="" download="MariuszSzkaradekCV">download</a> my CV.
                        </HereText>
                        <HereImgWrapper>
                        <HereImg src={css}/>
                        <HereImg src={Rea}/>
                        <HereImg src={html}/>
                        <HereImg src={npm}/>
                        <HereImg src={Boot}/>
                        <HereImg src={sass}/>
                        </HereImgWrapper>
                </HireMeWrapper>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default  ContactSection


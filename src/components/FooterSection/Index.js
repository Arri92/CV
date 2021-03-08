import React from 'react'
import {AiFillPhone, AiFillLinkedin} from 'react-icons/ai'
import {GoMention} from 'react-icons/go'
import { FootBtn, FooterButton, FooterContainer, FooterText, FooterWrap  } from './FooterElement'

const FooterSection = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterText>Thank you for visiting!</FooterText>
            <FooterButton>
                <FootBtn><AiFillPhone href="tel:+48602661108" onClick={() =>  navigator.clipboard.writeText('+48602661108')} /></FootBtn>
                <FootBtn><GoMention href="szkaradek.mariusz@gmail.com" onClick={() =>  navigator.clipboard.writeText('szkaradek.mariusz@gmail.com')}/></FootBtn>
                <FootBtn><AiFillLinkedin href="https://www.linkedin.com/mwlite/in/mariusz-szkaradek-285590159" /></FootBtn>   
            </FooterButton>
            <FooterText>Designed by Mariusz Szkaradek</FooterText>
            </FooterWrap>
        </FooterContainer>
    )
}

export default FooterSection

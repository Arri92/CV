import React from 'react'
import MainButton, {  CertButton, OtherButton } from './AboutButtons'
import { Column1, Column2, Heading, Img, ImgWrap, AboutContainer,
     AboutRow, AboutWrapper, TextWrapper, TopLine, BotText } from './AboutElements'
import Arri from './Arri.jpeg'
import './About.css'


const AboutSection = () => {
    
    return (
        <AboutContainer id="about" onLoad={MainButton} >
            <AboutWrapper>
                <AboutRow>
                    <Column1>
                    <TopLine>About me</TopLine>
                    <TextWrapper>
                        <Heading>I am a Prepress specialist, During my time at the Job, 
                            I have self-studying coding. 
                            I am very motivated and open-minded currently looking for a remote/stationary junior React Developer position.
                            </Heading>
                            <div id="myAbout">
                                <button className="btn active"  onClick={MainButton}><div className="btn1">Main skills</div></button>
                                <button className="btn" onClick={CertButton}><div className="btn1">Crtificates</div></button>
                                <button className="btn" onClick={OtherButton}><div className="btn1">Other skills</div></button>
                            </div>
                            <BotText id="AboutText"></BotText>      
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={Arri}/>
                    </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutSection

import React from 'react'
import { HomeContener, HomeContent, HomeH1, HomeP,  HomeBg, ImgBg, HomeWrapper } from './HomeElement';
import TextLoop from "react-text-loop";
import Arri2 from './Arri2.jpeg';


const HomeSection = () => {
    return (
    <HomeContener id="home">
        <HomeWrapper>
        <HomeBg>
            <ImgBg src={Arri2} />
        </HomeBg>
        <HomeContent>
            <HomeH1>Hello, I'm Szkaradek Mariusz</HomeH1>
            <HomeP>
            <TextLoop children={["React developer", "JS developer", "CSS developer", "WEB developer"]} />
            </HomeP>
            <HomeH1>Looking for junior job</HomeH1>        
        </HomeContent>
        </HomeWrapper>
    </HomeContener>
    )
}

export default HomeSection

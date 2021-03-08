import styled from 'styled-components'

export const HomeContener = styled.div`
color: #fff;
background-color: #0c0c0c;
` 
export const HomeBg = styled.div`


`
export const ImgBg = styled.img`
margin-top: 100px;
max-width: 100%;

`
export const HomeWrapper = styled.div`
display:grid;
z-index: 1;
height: 800px;
width: 100%;
max-width:1100px;
margin-left: auto;
margin-right: auto;
padding: 50px;
justify-content: center;
`
export const HomeContent = styled.div`
align-items:center;
position:absolute;
margin-top:200px;
`

export const HomeH1 = styled.h1`
z-index:1;
color: #fff;
font-size: 48px;
justify-content:center;
@media screen and (max-width: 768px){
    font-size:32px;
}

@media screen and (max-width: 480px){
    font-size: 24px;
}
`

export const HomeP = styled.p`

color: #a03fe0;
font-size: 60px;
text-align: left;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size:50px;
}

@media screen and (max-width: 480px){
    font-size: 40px;
}
`



import styled from 'styled-components'

export const AboutContainer = styled.div`
color: red;
background:#0a0816;

`

export const AboutWrapper = styled.div`
display:grid;
z-index: 1;
height: 800px;
width: 100%;
max-width:1100px;
margin-left: auto;
margin-right: auto;
padding: 0 24px;
justify-content: center;
@media screen and (max-width: 1050px){
height: 1200px;
}
@media screen and (max-width: 700px){
height:1100px
}
@media screen and (max-width:600px){
height:1000px
}
@media screen and (max-width:500px){
height:900px
}

@media screen and (max-width: 390px){
height:800px
}


`

export const AboutRow = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Column1 Column2";
    display: -moz-grid-group;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: "Column1 Column2";

@media screen and (max-width: 1050px){
    grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Column1"
    "Column2";
    
}
`

export const Column1 = styled.div`
height:350px;
margin-bottom: 15px;
padding: 0 15px;
grid-area: Column1;
margin-top:-200px;
@media screen and (max-width: 1050px){
padding-left: -30px;
height:200px;
margin-top: -200px;
}
@media screen and (max-width: 700px){
padding-left: -30px;
height:300px;
margin-top: -200px;
}
@media screen and (max-width: 500px){
padding-left: -30px;
height:550px;
margin-top:0px;
}


`

export const Column2 = styled.div`
pointer-events: none;
margin-bottom: 15px;
padding: 0 15px;
grid-area: Column2;
@media screen and (max-width: 1050px){
  margin-top:-100px;
}
@media screen and (max-width: 500px){
  margin-top:-350px;
}


@media screen and (max-width: 490px){
  margin-top:-400px;
}

`
export const TextWrapper = styled.div`

max-width: 540px;
padding-top: 200;
padding-bottom: 60px;
`

export const TopLine = styled.h1`
color: #a03fe0;
pointer-events: none;
font-size: 32px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
margin-top:20px;


`
export const Heading = styled.p`
pointer-events: none;
margin-bottom: 24px;
font-size: 32px;
line-height: 1.1.%;
font-weight: 600;
color: #ffffff;

@media screen and (max-width: 600px){

    font-size:24px;
}
`


export const BotText = styled.h1`
pointer-events: none;
max-width:440px; 
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: #ffffff;
`

export const ImgWrap = styled.div`
pointer-events: none;
max-width: 555px;
height: 100%;
`
export const Img = styled.img`
pointer-events: none;
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
border-radius: 20px 20px;

`
import styled from 'styled-components'

export const ContactContainer = styled.div`
background-color: #1d0617;
display: flex;
justify-content: center;
align-items: center;
height: 800px;
@media screen and (max-width: 650px){
  height:600px
}

` 

export const ContactWrapper = styled.div`
background-color: #000000;
display:flex;
z-index: 1;
height: 700px;
width: 100%;
max-width:1100px;
margin-left: auto;
margin-right: auto;
padding:10px;
justify-content: center;
border-radius: 100px;
@media screen and (max-width: 650px){
  height:500px
}
`

export const HireMeWrapper = styled.div`
margin-left: 40px;
`



export const HereTitle = styled.h1`
margin-top: 80px;
color: #a03fe0;
font-size: 44px;
`

export const HereText = styled.h2`
color: #fff;
font-size: 24px;
`

export const HereImgWrapper = styled.div`

display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: rows;
  margin: 100px  10px 10px 50px;
  text-align: center;
  @media screen and (max-width: 650px){
    
    margin: 10px  10px 10px 10px;

}
`

export const HereImg = styled.img`

  text-align: center;
margin-left:20px;
margin-right: 20px;

max-width: 150px;
max-height:150px;
@media screen and (max-width: 650px){
   max-width: 90px;
   max-height:90px;
}
`
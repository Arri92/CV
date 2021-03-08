import styled from "styled-components"

export const PortfolioContainer = styled.div`
color: #fff;
background: #1d0617;

`

export const PortfolioWrapper = styled.div`
display:grid;
z-index: 1;
height: 500px;
width: 70%;

margin-left: auto;
margin-right: auto;
justify-content: center;
@media screen and (max-width:1056px){
height: 800px;
}
`
export const PortfolioTitle = styled.h1`
margin-top:20px;
color: #a03fe0;
font-size: 48px;
`
export const PortSep= styled.div`

width:900px;
height:200px;
scale: 1.2;

@media screen and (max-width:1600px){
width: 800px;
}
@media screen and (max-width:1400px){
width: 700px;
}
@media screen and (max-width:1150px){
width:600px;

}
@media screen and (max-width:1056px){
    display: none;

}

`
export const PortMini = styled.div`
display:none;
@media screen and (max-width:1056px){
display:flex;
}
`
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const FooterContainer = styled.div`
background-color: #000000;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 150px;
position: relative;
z-index: 1;
color: #fff;
`
export const FooterWrap = styled.div`
text-align: center;
vertical-align: middle;
 
`

export const FooterText = styled.div`
margin-bottom:5px;
`

export const FooterButton = styled.div`
margin-bottom:5px;
`

export const FootBtn = styled(LinkR)`
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
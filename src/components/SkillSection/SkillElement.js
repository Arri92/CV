import styled from 'styled-components'


export const SkillContainer = styled.div`
color: #fff;
background-color: #0c0c0c;

`

export const SkillWrapper = styled.div`
display:grid;
z-index: 1;
height: 600px;
width: 100%;
max-width:1100px;
margin-left: auto;
margin-right: auto;
padding: 50px;
justify-content: center;
@media screen and (max-width: 910px){
    height: 800px;
}
@media screen and (max-width: 700px){
    height: 900px;
}
@media screen and (max-width: 500px){
    height: 1300px;
}
`
export const SkillTitle = styled.h1`
pointer-events: none;
color: #a03fe0;
font-size: 48px;
`
export const SkillBox = styled.div`
  display: grid;
  margin: 10px auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: rows;
  
  @media screen and (max-width: 910px){
    grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 700px){
    grid-template-columns:  1fr 1fr;
}
@media screen and (max-width: 500px){
    grid-template-columns:  1fr;
    

}
`
export const SkillRow = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px){
    
    height: 140px;

}
`

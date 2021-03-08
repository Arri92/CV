import React from 'react'
import  { useCountUp } from 'react-countup'
import './Box.css'



const Box = ({skillName, skillIcon, skillAdd, skillSize }) => {
     const{ countUp, update}= useCountUp({
        duration: 3,
        end: 0
    })
    
    return (
        <div className="TestBox">
        <div className="section"   onMouseOver={()=> update(skillAdd)} onMouseOut={()=> update(0)}>
        <div className="top">{skillName} {skillIcon}</div>
        <div className="layer">{countUp}%</div> 
        <div className="test" style={{width: skillSize}} ></div>
    
        </div> 
        </div>
        
    )
}

export default Box

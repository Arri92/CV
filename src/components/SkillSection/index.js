import React from 'react'
import {  SkillContainer, SkillBox, SkillTitle, SkillWrapper, SkillRow } 
from './SkillElement'
import { skillObjTwo, skillObjOne, skillObj3, skillObj4, skillObj5, skillObj6, skillObj7, skillObj8 } from'./SkillData'
import Box from './Box'

const SkillSection = () => {
    return (
        <SkillContainer id="skills">
            <SkillWrapper>
                <SkillTitle>Skills</SkillTitle>
                <SkillBox>
                    <SkillRow><Box {...skillObjTwo}/></SkillRow>
                    <SkillRow><Box {...skillObjOne}/></SkillRow>
                    <SkillRow><Box {...skillObj3}/></SkillRow>
                    <SkillRow><Box {...skillObj4}/></SkillRow>
                    <SkillRow><Box {...skillObj5}/></SkillRow>
                    <SkillRow><Box {...skillObj6}/></SkillRow>
                    <SkillRow><Box {...skillObj7}/></SkillRow>
                    <SkillRow><Box {...skillObj8}/></SkillRow>
                </SkillBox>
            </SkillWrapper>
        </SkillContainer>
    ) 
}

export default SkillSection

import React from 'react'

import  { PortF } from './Portfolio'
import { PortfolioContainer, PortfolioTitle, PortfolioWrapper, PortMini, PortSep } from './PortfolioElements'

const PortfolioSection = () => {
    return (
      <PortfolioContainer id="portfolio">
        <PortfolioWrapper>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <PortSep>
          <PortF />
          </PortSep>
          <PortMini>
            <PortF />
          </PortMini>
        
        </PortfolioWrapper>
        </PortfolioContainer>
       
    )
}

export default PortfolioSection


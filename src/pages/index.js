import React, {useState} from 'react'
import HomeSection from '../components/HomeSection'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SkillSection from '../components/SkillSection'
import PortfolioSection from '../components/PortfolioSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection/Index'

const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }




    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle} />
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <PortfolioSection />
            <ContactSection />
            <FooterSection />

        </>
    )
}

export default Home

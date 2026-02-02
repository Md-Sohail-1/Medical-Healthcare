import React from 'react'

import { LandingSection } from './Components/LandingSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ServiceSection from './Components/ServiceSection'
import OurTeamSection from './Components/OurTeamSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ServiceSection />
      <OurTeamSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
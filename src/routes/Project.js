import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import PricingCards from '../components/PricingCards';
import Work from '../components/work';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS." text="some of the most recent works"/>
      <Work/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project

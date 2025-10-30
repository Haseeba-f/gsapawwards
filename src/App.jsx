import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import gsap from "gsap"
import { ScrollSmoother,ScrollTrigger } from 'gsap/all'
import MessageSection from './sections/MessageSection'
import FlavourSection from './sections/FlavourSection'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import NutritionSection from './sections/NutritionSection'
import FooterSection from './sections/FooterSection'

gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

const App = () => {
  useGSAP(()=> {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
  })
  })
  return (
    <div>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
      
      <HeroSection/>
      <MessageSection/>
      <FlavourSection/>
      <NutritionSection />
      <FooterSection />
      </div>
    </div>
    </div>
  )
}

export default App



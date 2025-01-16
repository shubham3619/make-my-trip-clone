import React from 'react'
import bgImg from './assets/bg2.webp'
import Navbar from './components/Navbar'
import Booking from './components/Bookingcomponent'
import Offers from './components/OfferComponent'
import OtherDetails from './components/OtherDetails'
import About from './components/AboutMakeMyTrip'

const App = () => {
  return (
    <div
    style={{  backgroundImage: `url(${bgImg}), linear-gradient(to bottom, #051322, #15457c)`,
    backgroundSize: "100% 540px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",}}
    className="bg-cover bg-center h-screen relative"
  >
    <div className='max-w-7xl mx-auto'>
    <Navbar />
    <Booking />
    <Offers />
    <OtherDetails />
    <About />
    </div>
  </div>
  )
}

export default App
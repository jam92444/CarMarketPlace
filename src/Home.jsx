import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        {/* header  */}
        <Header/>
        {/* hero section  */}
        <Hero/>
        {/* category  */}
        <Category/>
        {/* most search cars */}
        <MostSearchedCar/>
        {/* info section  */}
        <InfoSection/>
        {/* footer  */}
        <Footer/>
    </div>
  )
}

export default Home
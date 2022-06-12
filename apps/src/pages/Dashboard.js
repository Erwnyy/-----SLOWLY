import React from 'react'
import Card from '../components/dashboard/card/Card'
import Featured from '../components/dashboard/featured/Featured'
import Hero from '../components/dashboard/Hero/Hero'
import Offer from '../components/dashboard/offer/Offer'
import Navbar from '../components/Navbar/Navbar'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Card/>
        <Offer/>
        <Featured/>
    </div>
  )
}

export default Dashboard
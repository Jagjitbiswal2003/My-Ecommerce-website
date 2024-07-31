import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Topproducts from '../Components/Topproducts'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>

      <Banner/>

      <Topproducts/>

      <Card heading="Most Popular Products"/>

      <Footer/>

    </div>
  )
}

export default Home

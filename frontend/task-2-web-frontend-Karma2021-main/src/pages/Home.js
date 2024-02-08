import React from 'react'
import Album from '../components/Album'
import Cover from '../components/Cover'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ServiceH from '../components/ServiceH'
import ServiceComponent from '../components/Services'
function Home() {
  return (
    <div>
      <NavBar />
      <Cover />
      <ServiceH />
      <ServiceComponent />
      <Album />
      <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ServiceH from '../components/ServiceH'
import ServiceTemp from '../components/ServiceTemp'
import ServiceComponent from '../components/Services'
function ServicePage() {
  return (
    <div>
      <NavBar />
      <ServiceTemp />
      <ServiceH />
      <ServiceComponent />
      <Footer />
    </div>
  )
}

export default ServicePage

import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Works from './pages/Works'
import Blog from './pages/Blog'
import Hire from './pages/Hire'

const App = () => {
  return (
    <>
      <Navbar/>
      <AboutUs/>
      <Services/>
      <CaseStudies/>
      <Works/>
      <Blog/>
      <Hire/>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Works from './pages/Works'
import Blog from './pages/Blog'
import Hire from './pages/Hire'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
     <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/services' element={ <Services/>}/>
    <Route path='/casestudies' element={<CaseStudies/>}/>
    <Route path='/work' element={<Works/>}/>
    <Route path='/blog' element={ <Blog/>}/>
    <Route path='/hire' element={ <Hire/>}/>
    <Route path='*'element={<Home/>}/>
    </Routes>
       <Footer/>
    </>
  )
}

export default App

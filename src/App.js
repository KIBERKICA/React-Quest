import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import FAQ from './pages/Faq'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Reset from './pages/Reset'
import Quest from './pages/Quest'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/faq' element={<FAQ />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/reset' element={<Reset />} />
        <Route exact path='/quest' element={<Quest />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
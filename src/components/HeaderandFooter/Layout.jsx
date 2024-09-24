import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <main className='bg-gray-100'>
       <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;

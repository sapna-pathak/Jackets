import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar2 from './Navbar2'

export default function Layout(props) {
  return (
    <div>
        <Navbar2/>
        <main>{props.children}</main>
        <Footer/>
    </div>
  )
}

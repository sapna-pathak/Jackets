import React from 'react'
import cart from '../assets/red-simple-shopping-cart-icon-12.png';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
export default function Navbar2() {
  return (
    <div className='sticky-top'>

<nav class="navbar navbar-expand-lg fs-4" style={{backgroundColor:'peachpuff', borderRadius:"20px", height:"60px"}}>
  <div class="container-fluid">
  <b class="navbar-brand ms-3" style={{display:"flex"}}><img src={logo} className='me-3' style={{height:"50px", width:"60px"}}></img><h1 style={{color:"black", fontWeight:"900", textDecoration:"none"}}>Jack</h1></b>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
        <li class="nav-item me-5">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
<nav class="navbar navbar-expand-lg bg-body-tertiary" style={{height:"40px"}} >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"center"}}>
      <ul className="navbar-nav">
        
        <li className="nav-item me-5 fs-5">
        <NavLink className="nav-link" to="/men">Men</NavLink>
        </li>
        <li className="nav-item me-5 fs-5">
        <NavLink className="nav-link" to="/women">Women</NavLink>        
        </li>
        <li className="nav-item me-5 fs-5">
        <NavLink className="nav-link" to="/kids">Kids</NavLink>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}

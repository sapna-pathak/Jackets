import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'
import About from './About'
import img1 from '../assets/men2.webp'
import img2 from '../assets/women.jpg'
import img3 from '../assets/Winter-Outdoor-Children-s-Black-3piece-Set-Jacket-with-Pockets.webp'

export default function Home() {
  return (
    <div>
        <Navbar/>
      <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel" style={{height:"700px"}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} style={{height:"700px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} style={{height:"700px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} style={{height:"700px"}} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

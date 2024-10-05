import React from 'react'
import img from '../assets/1.jpeg'

export default function About() {
  return (
    

<div id='about' className='container ms-5' style={{ paddingTop:"100px"}}>
<h1 style={{ fontSize: "100px"}} className='text-center'>About Us</h1>
<div class="row mt-5 grid gap-0 column-gap-5">
 <div class="col-4">
<img src={img} className='ms-5' style={{width:"18rem"}}></img></div>
 

  
  <div class="col-7 mt-5">
  Our vision is to be a destination where fashion, innovation and lifestyle converge to provide a unique shopping experience, making us Fashion Different. Iconic offers luxuriant and curated shopping vibe across all their 25+ stores in the country, while our omni-channel presence extends the experience to everyone digitally.  
  <br/><br/><span style={{fontSize:"larger", fontWeight:"bolder", marginTop:"20px",marginBottom:"20px", fontFamily:"sans-serif", }}>Exclusive range of Premium International branded clothing, accessories & shoes for men, women & kids</span><br/><br/>
The clothing selection from renowned brands meets every wardrobe need, from formal to semi-formal, casual, and denim to active like True Religion, GANT, DKNY, Antony Morato and Many More. 

The product lines in the company's brand portfolio span all age groups, from kids and young adults to men and women, and range from luxurious, high-end style to reasonably priced options.

View Collection
  </div>
  </div>
  </div>
  )
}

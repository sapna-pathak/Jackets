import React from 'react'
import Layout from './Layout'
import { men } from '../assets/assets'
export default function Men() {
  return (
    <Layout>
      <h1 style={{fontSize:"100px", fontWeight:"500"}}>Men's Jackets</h1>
    {
      men.map((item)=>{
        return(
  <div key={item.id} className='div1 m-4 ms-5'>
  <div class="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
    <img src={item.img} class="card-img-top rounded-0" alt="..."/>
    <div class="card-body mt-3 mb-3">
      <div class="row">
        <div class="col-10">
          <h4 class="card-title">{item.name}</h4>
          <p class="card-text">
            
            {item.desc}
          </p>
        </div>
        <div class="col-2">
          <i class="bi bi-bookmark-plus fs-2"></i>
        </div>
      </div>
    </div>
    <div class="row align-items-center text-center g-0">
      <div class="col-4">
        <h5>{item.mrp}</h5>
      </div>
      <div class="col-8">
        <a href="#" class="btn btn-dark w-100 p-3 rounded-0 text-warning">ADD TO CART</a>
      </div>
    </div>
  </div>
</div>

        )
      })
    }
    </Layout>
  )
}

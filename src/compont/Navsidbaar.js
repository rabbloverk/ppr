import React from 'react'
import "./Navsidbaar.css"
import {  Link } from "react-router-dom"

const Navsidbaar = () => {
  return (
    <div className='Navsidbaar'>
      
    <ul className='listul'>
      <li className='listli'>
      <Link className='listlink' to="/Clothes"> ملابس </Link>

      </li>

      <li className='listli'>
         <Link className='listlink' to="/Mobiles">جوالات </Link>
      </li>

      <li className='listli'>
        <Link className='listlink' to="/Laptop">لابتوب</Link>
      </li>

      <li className='listli'>
        <Link className='listlink' to="/Beautifying">أدوات تجميل </Link>
      </li>

      <li className='listli'>
        <Link className='listlink' to="/Shoes">أحذية</Link>
     </li>

     <li className='listli'>
     <Link className='listlink' to="/Perfume">عطورات</Link>
  </li>

  <li className='listli'>
  <Link className='listlink' to="/hours">ساعات </Link>

</li>

       </ul>
    </div>
  )
}

export default Navsidbaar

import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const NavBar = () => {
  const [search,setSearch]=useState("")
  const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setdata(res.data))
    }, [])

  return (
    <div className='contenr-nav'>
       <div>
         <Link to="/" className='Mowafer'>Mowafer Stor</Link>
       </div>

       <div>
        <input className='search' type='search' placeholder='what are you Looking for?' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
       </div>
      

       <div >
        <ul className='icon'>
          <li>
          <i className="fa-solid fa-user"></i>
          </li>

          <li>
            <i className="fa-solid fa-heart"></i>
          </li>

          <li>
            <i className="fa-solid fa-briefcase"></i>
          </li>
        </ul>
       </div>

      
     

       
      
    </div>
  )
}

export default NavBar

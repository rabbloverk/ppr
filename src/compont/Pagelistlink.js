import React from 'react'
import"./Pagelistlink.css"
import { Link } from 'react-router-dom'

function Pagelistlink() {
  return (
    <div className='contenerpagelink'>
       <div className='cont-link'>
        <Link to="/" className='item-link'>Home</Link>
       </div>

       <div className='cont-link'>
        <Link to="/clothes" className='item-link'>Clothes</Link>
       </div>

      <div className='cont-link'>
       <Link Link to="/baby" className='item-link'>Baby</Link>
      </div>

      <div className='cont-link'>
       <Link Link to="/sports" className='item-link'>Sports</Link>
      </div>

     <div className='cont-link'>
       <Link Link to="/perfumes" className='item-link'>perfumes</Link>
     </div>

    <div className='cont-link'>
      <Link Link to="/shoes" className='item-link'>Shoes</Link>
    </div>

    <div className='cont-link'>
      <Link Link to="/mobiles" className='item-link'>Mobiles</Link>
    </div>

    <div className='cont-link'>
      <Link Link to="/beauty" className='item-link'>Beauty Tools</Link>
    </div>

    <div className='cont-link'>
     <Link Link to="/hours" className='item-link'>Hours</Link>
    </div>

    </div>
  )
}

export default Pagelistlink

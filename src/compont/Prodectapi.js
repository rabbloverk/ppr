import axios from 'axios';
import "./prodectapi.css"
import React, { useEffect, useState } from 'react'

function Prodectapi() {

    const[Products,setProdcts]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setProdcts(res.data))
    }, [])

  return (
    <div className='contenercard'>
    
      {
        Products.map((item,indx)=>(

            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            
            className='contcard' key={indx}>

                <img className='imgapi' src={item.image} alt="icons" />
                
                
                <h2 style={{display:"flex" ,justifyContent:"center",alignItems:"center",fontSize:"12px", width:"200px",marginTop:"10px"}}>{item.title}</h2>
                <h3 style={{color:"#f7c45f"}}>prise : {item.price}</h3>
           
                </div>

        )

        )
      }
    </div>
  )
}

export default Prodectapi

import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'blue'}} className='d-flex align-items-center justify-content-center flex-column text-light'>
      <h1>Contact Us</h1>
     <h5> <MdEmail /> RBuilder@gmail.com</h5>
     <h5><FaPhoneAlt /> 6645217810</h5>
     <h4>Connect with us</h4>
     <div className='d-flex align-items-center m-2'>
      <FaSquareWhatsapp className='me-2'/>
      <FaInstagramSquare className='me-2'/>
      <FaFacebook />
     </div>
     <p>Designed and build with React <FaHeart style={{color:'red'}}/></p>


    </div>
  )
}

export default Footer

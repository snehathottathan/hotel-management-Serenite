

// import { useEffect } from 'react';
import './Footer.scss'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
export default function Footer() {

  return (
    <div className="footer">
      {/* <div className='left'> */}
        <div className='footer-icon'>
          <MdEmail />  +123-456-7890
        </div>
        <div className='footer-icon'>
          <FaPhoneAlt />info@resortbooking.com
        </div>
        <div className='media'>
        <FaInstagram className='media-icon' />
        <FaFacebook className='media-icon'/>
        <AiFillTwitterCircle />

      </div>
      </div>
      
    // </div>
  );
}

import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non dolor beatae repellendus praesentium hic mollitia officia 
                laboriosam amet consequuntur ea, nihil vel recusandae itaque tenetur. Quam culpa veritatis atque.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-Center">
            <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Dilivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
              <h2>Get In Touch</h2>
              <ul>
                <li>+91-9440609080</li>
                <li>abcd12@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright-text'>Copyright 2024 @tomato.com- All Rights Reserved </p>
    </div>
  )
}

export default Footer

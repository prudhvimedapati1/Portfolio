import React from 'react'
import './footer.css'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Prudhvi</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/prudhvimedapati" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/prudhvimedapati/" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/prudhvimedapati" target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prudhvi. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
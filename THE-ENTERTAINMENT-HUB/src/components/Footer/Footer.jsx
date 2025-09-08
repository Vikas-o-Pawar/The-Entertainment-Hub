import React from 'react'
import './Footer.css'
import youTubeIcon from '../../assets/youtube.svg'
import twitterIcon from '../../assets/twitter-x.svg'
import instagramIcon from '../../assets/instagram.svg'
import facebookIcon from '../../assets/facebook.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <img src={instagramIcon} alt="instagram" />
        <img src={facebookIcon} alt="facebook" />
        <img src={twitterIcon} alt="twitter" />
        <img src={youTubeIcon} alt="YouTube" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relationships</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyrightTxt">&copy; 2023 TEH, Inc.</p>
    </div>
  )
}

export default Footer
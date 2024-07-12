import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo-dark 1.png';
import callIcon from '../../../assets/call-calling.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TbMail} from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import "./Footer.css"


export default function Footer() {
  return (
    <div className='footer'>
        <div className='container grid grid--footer'>
            <div className='brand-col'>
                <Link to='/' className='footer-logo'>
                    <img className='logo' src={Logo} alt="Grostore logo" />
                </Link>
                <p className='brand-description'>the ultimate destination for snack enthusiasts. 
                We are passionate about bringing you a delectable assortment 
                of snacks that will satisfy your cravings and ignite your taste buds.</p>
                <ul className='social-links'>
                    <li>
                        <Link to='/'><FaFacebook className='social-icon' /></Link>
                    </li>
                    <li>
                        <Link to='/'><FaInstagram className='social-icon' /></Link>
                    </li>
                    <li>
                        <Link to='/'><FaTwitter className='social-icon' /></Link>
                    </li> 
                </ul>
               
            </div>
            <div className='nav-col'>
                <p className='footer-heading'>Contact Us</p>
                <p className='address'>570 Ajayi Street, 8th Ave, Gwarimpa, Abuja</p>
                
                <p className='telephone'>
                    <Link  className='footer-link' to='tel:08130000000'><IoCall /> 08130000000, 09081000000 <br /></Link>
                    <Link  className='footer-link' to='mailto:grostore.enquiry@gmail.com'><TbMail className='mail-icon'/> grostore.enquiry@gmail.com</Link> 
                </p>
                 
            </div>

            <div className='nav-col nav-col2'>
                <p className='footer-heading head-col2'>Delivery Support</p>
                <p className='orange-coloured-text delivery-phone'><img className='phone-icon' src={callIcon} alt='telephone'/> +2348130000000</p>
                <p className='schedule'>Monday-Friday:9:30am-08:00pm</p>
                <p className='schedule'>Saturday-Sunday:11:00am-05:00pm</p>
            
            </div>
            <div className='nav-col'>
                <p className='footer-heading'>Quick Links</p>
                <ul className="footer-nav">
                    <li>
                        <Link to="/" className="footer-link">Home</Link>
                        </li>
                    <li>
                        <Link to="/" className="footer-link">Categories</Link>
                        </li>
                    <li>
                        <Link to="/" className="footer-link" >About Us</Link>
                        </li>
                    <li>
                        <Link to="/" className="footer-link" >Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
       
        <ul className="footer-list-item">
                <li className="footer-list style-none">Pastries</li>
                <span className='footer-dot'></span>
                <li className="footer-list">Cake</li>
                <span className='footer-dot'></span>
                <li className="footer-list">Burger</li>
                <span className='footer-dot'></span>
                <li className="footer-list">Pizza</li>
                <span className='footer-dot'></span>
                <li className="footer-list" >Drink</li>
        </ul>
       
        <div className="div">
            <p className="copyright">copyright &copy; 2024. All rights reserved. <strong className=' orange-coloured-text'>Grostore</strong></p>
        </div>


    </div>
  )
}

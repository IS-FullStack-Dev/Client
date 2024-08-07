import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import Toggle from '../../../assets/toggle.png';
import Logo from "../../../assets/hamburger.svg"
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        setOpen(!open)
    }
    
  return (
    <header className="navbar">
         <Link to="/" className="logo-con">
            <img className="logo" src={Logo} alt='Logo'/>
            <span className="logo-name1">Snack</span><span className="logo-name2">Haven</span>
        </Link>

        <nav className={open ? "menu active" : "menu" }>
            <ul className="main-nav-list">
                <li>
                    <Link  to="/" className="activ">Home</Link>
                </li>
                <li>
                    <Link  to="/">Category</Link>
                </li>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/">Contact Us</Link>
                </li>

            </ul>

            <div className='contacts-container'>
                <span className="contacts-order">Call and Order</span>
                <p className="contacts-num">08130000000</p>
            </div>

            <ul className='list-icon'>
                    <li><Link to="/"><CiSearch   size={20} style={{ marginTop: '6px', marginRight: '1.2rem' }} /></Link></li>
                    <li><Link to="/"><IoPerson  size={20} style={{ marginTop: '6px', marginRight: '1.2rem' }} /></Link></li>
                    <li><Link to="/"><IoBag className='shopping-bag-icon' size={30}  /></Link></li>
            </ul>

            <Link to="/" className="toggle"><img src={Toggle} alt="toggle"  /></Link>
        </nav>


        <div className='mobile-btn' onClick={handleClick}>
            {open ? <AiOutlineClose className="nav-close" size={30} /> :  <AiOutlineMenu size={30} style={{ color: '#006633' }} /> }
                  
        </div>

    </header>

  )
}

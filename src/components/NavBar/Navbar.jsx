import React from 'react'
import Images from '../../assets/Images.js'
import "./Navbar.css"
import {Link} from "react-scroll"

const Navbar = () => {
    return (
        <nav className='navbar'>
            {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className=""> */}
                <img src={Images.Logo} alt="" className='logo'/>
            {/* </Link> */}
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">Home</Link>
                <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">Clients</Link>
            </div>
            <button className='desktopMenuBtn' onClick={()=>{
                document.getElementById("contact").scrollIntoView({behavior:"smooth"});
            }}>
                <img src={Images.contact} alt="" />Contact Us

            </button>
        </nav>
    )
}

export default Navbar

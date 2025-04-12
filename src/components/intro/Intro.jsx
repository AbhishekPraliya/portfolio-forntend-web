import React from 'react'
import "./Intro.css"
import Image from "../../assets/Images.js"
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'>Hello</span>
                <span className="introText">I'm<span className="introName"> Smith</span><br />Website Designer</span>
                <p className="introPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam cumque quae est voluptatibus, dicta iste inventore alias.</p>
                <Link><button className='btn'><img src={Image.BtnImg} alt="Hire" className='btnImg' /><p>Hire me</p></button></Link>
            </div>
            <img src={Image.Image2} className='bg' alt="" />
        </section>
    )
}

export default Intro

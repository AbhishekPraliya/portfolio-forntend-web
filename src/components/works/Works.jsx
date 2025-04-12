import React from 'react'
import "./Works.css"
import images from '../../assets/Images';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className='worksDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis quasi ab fugit voluptates qui ipsam minus? </span>
            <div className="worksImgs">
                <img src={images.Portfolio1} alt="" className="worksImg" />
                <img src={images.Portfolio2} alt="" className="worksImg" />
                <img src={images.Portfolio3} alt="" className="worksImg" />
                <img src={images.Portfolio4} alt="" className="worksImg" />
                <img src={images.Portfolio5} alt="" className="worksImg" />
                <img src={images.Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}

export default Works;
import React from 'react'
import images from '../../assets/Images'
import "./Skills.css"

const Skills = () => {
    return (
        <section id="skill">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis necessitatibus deserunt accusamus, omnis est fugiat inventore harum consequuntur corporis sunt vero nihil, nisi minima mollitia sapiente labore autem dicta laboriosam.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={images.UiDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Designer</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={images.WebDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Designer</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={images.AppDesigner} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Designer</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills




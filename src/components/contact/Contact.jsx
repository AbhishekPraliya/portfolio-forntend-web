import React from 'react'
import "./Contact.css"
import images from '../../assets/Images'

export const Contact = () => {
    return (
        <section className='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquam quisquam vel non asperiores. Accusantium, nostrum. Officia harum, deserunt quia ex accusantium facilis.</p>
                <div className="clintImgs">
                    <img src={images.Walmart} alt="client" className="clientImg" />
                    <img src={images.Adobe} alt="client" className="clientImg" />
                    <img src={images.Microsoft} alt="client" className="clientImg" />
                    <img src={images.Facebook} alt="client" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className='contactDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eaque?</span>
                <form className="contactForm">
                    <input type="text" className='name' placeholder='Your Name'/>
                    <input type="email" className="email" placeholder='Your Email'/>
                    <textarea name="message" className='msg' rows="5" placeholder='Your Message' id=""></textarea>
                    <button type='submit' value="" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={images.FacebookLogo} alt="Facebook" className="link" />
                        <img src={images.Twitter} alt="Twitter" className="link" />
                        <img src={images.Youtube} alt="Youtube" className="link" />
                        <img src={images.Instagram} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

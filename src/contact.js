import './contact.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Contact = () => {
    return (  
        <div className="contact">
            <div className="contact-content">
                <div className="start">
                    <lord-icon
                        src="https://cdn.lordicon.com/onmwuuox.json"
                        trigger="loop"
                        colors="primary:#2E236C,secondary:#fff"
                        style={{width:'150px',height:'150px'}}>
                    </lord-icon>
                    <div className="heading">
                        <h1>Contact Us</h1>
                        <Link to='/home'>Home</Link>
                        <span>/TheCoder</span>
                    </div>
                </div>
                <div style={{ width: '100%', height: '450px', border: 'none' }} className='map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.0817694093!2d3.384483042189566!3d6.516509421618821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1728852444606!5m2!1sen!2sng"
                        height="300"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="interaction">
                    <form action="/">
                        <label htmlFor="name">Your Name</label>
                        <input type="text"  />
                        <label htmlFor="Your Email">Your Email</label>
                        <input type="email" />
                        <label htmlFor="message">Your Message(not necessary)</label>
                        <textarea name="message" id="message"></textarea>
                        <div className="btn">
                            <button>SEND MESSAGE</button>
                        </div>
                    </form>
                    <div className="reveal">
                        <h1>Get In Touch.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere libero excepturi earum adipisci odit, nisi rem non velit. Repellendus alias</p>
                        <div className="me">

                            <div className="myitem">
                                <i class="fa-solid fa-location-dot"></i>
                                <div>
                                    <b>Address</b>
                                    <small>99th, aurround St. Pku city, 28293, lagos nigeria</small>
                                </div>
                            </div>
                            <div className="myitem">
                                <i class="fa-solid fa-phone"></i>
                                <div>
                                    <b>Call Us</b>
                                    <small>+234-8112163430</small>
                                </div>
                            </div>
                            <div className="myitem">
                                <i class="fa-solid fa-envelope"></i>
                                <div>
                                    <b>Mail Us</b>
                                    <small>fabayojackson5@gmail.com</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;
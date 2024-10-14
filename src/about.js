import about_img from './images/jack_2.svg';
import './about.css';

const About = () => {
    return (  
        <div className="about">
            <section>
                <div className="about_img">
                    <img src={about_img} alt="" />
                </div>
                <div className="detail">
                    <small>Who am i?</small>
                    <p>i'm Fabayo Jackson, a Web Developer</p>
                    <small className="text">
                    I’m someone who’s always eager to learn and explore new ideas.
                    I love digging into complex concepts, even when they feel tough at first.
                    I don’t shy away from challenges—instead, I tackle them with patience and a 
                    determination to improve. Whether I’m learning a new programming language or 
                    just having meaningful conversations, I always aim to approach things thoughtfully
                    and creatively. I believe in keeping an open mind and embracing growth, and I’m constantly
                    working to become a better version of myself every day.
                    </small>
                    <footer>
                        <small><b>Name:</b>Fabayo Jackson</small>
                        <small><b>From:</b>Lagos, Nigeria</small>
                        <small><b>Age:</b>20</small>
                        <small><b>Email:</b>fabayojackson5@gmail.com</small>
                    </footer>
                    <a href="https://www.instagram.com/jacksontemi_dev?igsh=MXRjYmh2a2hkOXluYw==">Follow on <i className='fa-brands fa-instagram'></i></a>
                </div>
            </section>
        </div>
    );
}
 
export default About;
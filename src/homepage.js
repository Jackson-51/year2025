import './portfolio.css';
import jack from './images/jack.svg'

const Home = () => {
    return ( 
        <div className="home">
            <div className="first">
                <div className="top">
                    <small>Hi There!</small>
                    <h3>I am a Developer</h3>
                    <small>I make the complex simple</small>
                    <a href='/'>Contact Me</a>
                </div>
                <div className="down">
                    <span>
                        <b>Email</b>
                        <small>fabayojackson5@gmail.com</small>
                    </span>
                    <span>
                        <b>Phone</b>
                        <small>+2348112623430</small>   
                    </span>
                    <span>
                        <b>Location</b>
                        <small>Lagos, Nigeria</small>
                    </span>
                </div>
            </div>
            <div className="second">
                <img src={jack} alt="" />
            </div>
        </div>
     );
}
 
export default Home;
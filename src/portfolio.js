import { Link } from 'react-router-dom';
import './portfolio.css';

const Portfolio = () => {
    return (
        <nav>
            <h2>THECODER</h2>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">My Service</Link>                
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
 
export default Portfolio;
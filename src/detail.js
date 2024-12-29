import "./test.css";
import celeb  from './party.svg';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const Identity = () => {
    const [name, setName] = useState('');

    const saveName = () => {
        localStorage.clear();
        localStorage.setItem('name', name);
    }

    return ( 
        <div className="iden">
            <div className="form">
                <img src={celeb} alt="celebration" />
                <label htmlFor="name">I need your name 👇</label>
                <input type="text" placeholder="🌟🌟🌟" value={name} onChange={(e) => setName(e.target.value)}/>
                <Link to="/test" onClick={saveName}>Done</Link>
            </div>
        </div>
     );
}
 
export default Identity;
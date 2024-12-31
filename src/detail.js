import "./test.css";
import celeb  from './party.svg';
import { useState } from "react";

const Identity = ({changeToB}) => {
    const [name, setName] = useState('');
    const [bool, setBool] = useState(null);

    const saveName = () => {
        localStorage.clear();
        localStorage.setItem('name', name);
        changeToB();
    }
    const nameControl = () => {
        if (name) {
            setBool(true);
        }
        else{
            setBool(false)
        }
    }

    return ( 
        <div className="iden">
            <div className="form">
                <img src={celeb} alt="celebration" />
                <label htmlFor="name">I need your name 👇</label>
                <input type="text" placeholder="....." value={name} onKeyUp={nameControl} onChange={(e) => setName(e.target.value)}/>
                {bool && <button onClick={saveName}>Done</button>}
            </div>
        </div>
     );
}
 
export default Identity;
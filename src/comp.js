import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './comp.css';
import { useState } from 'react'

const Sidebar = () => {
    const [value, setValue] = useState(null);
    const [position, setPosition] = useState(0);

    const change = (e) => {
        setValue(!value);
    }
    const slide = (num) => {
        setPosition(num)
    }
    return ( 
        <div className="container" 
            style={
                {width:`${(value)? '58px' : '15em'}`}}>
            <div className="control" onClick={change} style={{transform: `rotate(${(value)?'180deg':'0'})`}}>
                 <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="sidebars">
            <header>
                <i className="fa-solid fa-heart"></i>
                <h4>Team.Co</h4>
            </header>
            <div className="items">
                <span className="slider" style={{top:`${position * 56}px`}}></span>
                <div className="item" onMouseEnter={() => slide(0)}>
                    <i className="fa-solid fa-house"></i>
                    <Link style={{opacity:`${(value)? '0' : '1'}`}}>Home</Link>
                </div>
                <div className="item" onMouseEnter={() => slide(1)}>
                    <i className="fa-solid fa-gear"></i>
                    <Link to="/" style={{opacity:`${(value)? '0' : '1'}`}}>Settings</Link>
                </div>
                <div className="item" onMouseEnter={() => slide(2)}>
                    <i className="fa-brands fa-windows"></i>
                    <Link to="/" style={{opacity:`${(value)? '0' : '1'}`}}>Dashboard</Link>
                </div>
                <div className="item" onMouseEnter={() => slide(3)}>
                    <i className="fa-solid fa-envelope"></i>
                    <Link to="/" style={{opacity:`${(value)? '0' : '1'}`}}>Mail</Link>
                </div>
                <div className="item" onMouseEnter={() => slide(4)}>
                    <i className="fa-solid fa-cloud"></i>
                    <Link to="/" style={{opacity:`${(value)? '0' : '1'}`}}>Cloud</Link>
                </div>
                <div className="item" onMouseEnter={() => slide(5)}>
                    <i className="fa-solid fa-circle-dot"></i>    
                    <Link to="/" style={{opacity:`${(value)? '0' : '1'}`}}>Workpiece</Link>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Sidebar;
import "./test.css";
import { useEffect, useRef, useState }  from "react";
import vid from './2024audio.mp4';

const Test = ({changeToA}) => {
    const [value, setValue] = useState(null);
    const [bool, setBool] = useState(null);
    const [username, setUsername] = useState('s');
    const [popup, setPopup] = useState(false);
    const videoRef = useRef(null);
    const [isplaying, setIsplaying] = useState(false);

    const animate = () => {
        const video = videoRef.current;
        if (isplaying){
            video.pause();
        }
        else{
            video.play();
        }

        setIsplaying(!isplaying);

        setValue(true);
        setTimeout(() => {
            setBool(true);
        }, 3000);

    }

    useEffect(() => {
        const name = localStorage.getItem('name');
        setUsername(name);
        setTimeout(() => setPopup(true), 4000);
    }, []);

    return ( 
        <div className="test">
            <i className="fa-solid fa-angle-left" onClick={changeToA}></i>
            <video loop controls ref={videoRef}>
                <source src={vid}/>
            </video>
            { bool && <dotlottie-player src="https://lottie.host/773d6a65-af5a-4ae8-85be-b431f23470d9/3uLJZzwlyL.lottie" background="transparent" speed="1" style={{width: "100vw", height: "100vh"}} loop autoplay></dotlottie-player> }
            <div className="year" style={{transform : `${(bool)? "scale(1.2)" : ""}`}}>
            <h1>202</h1>
                <b style={{opacity: `${(bool)? '1' : ''}`}}>Happy New Year {username}</b>
                <div className="change">
                    <h1 className="four" style={{transform : `${(value)? "translateY(-5em)": ""}`}}>4</h1>
                    <h1 className="five" style={{transform : `${(value)? "translateY(-70px)": ""}`}}>5</h1>
                </div>
            </div>
            <span onClick={animate}><i className="fa-solid fa-play"></i><p style={{opacity: `${(popup)? '0' : '1'}`}}>Click on the play button</p></span>
        </div>
     );
}
 
export default Test;

import './service.css';

const Service = () => {
    

    return ( 
        <div className="service">
            <div className="service-content">
                <div className="title">
                    <h1>SERVICE</h1>
                    <p>My Service</p>
                </div>
                <div className="service-grid">
                    <div className="service-item one">
                        <lord-icon
                            src="https://cdn.lordicon.com/ailnzwyn.json"
                            trigger="morph"
                            state="morph-code"
                            style={{width:'100px',height:'100px'}}
                            colors="primary:#6e20ec,secondary:#fff"
                            target=".one"
                            >
                        </lord-icon>
                        <b>Web Development</b>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore necessitatibus </p>
                    </div>
                    <div className="service-item two">
                    <lord-icon
                        src="https://cdn.lordicon.com/bjxtqill.json"
                        trigger="hover"
                        target=".two"
                        colors="primary:#6e20ec,secondary:#fff"
                        style={{width:'100px',height:'100px'}}>
                    </lord-icon>
                        <b>3D design</b>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore necessitatibus </p>
                    </div>
                    <div className="service-item three">
                    <lord-icon
                        src="https://cdn.lordicon.com/exymduqj.json"
                        trigger="hover"
                        target=".three"
                        colors="primary:#6e20ec,secondary:#fff"
                        style={{width:'100px',height:'100px'}}>
                    </lord-icon>
                        <b>Design Trend</b>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore necessitatibus </p>
                    </div>
                    <div className="service-item four">
                    <lord-icon
                        src="https://cdn.lordicon.com/rzgcaxjz.json"
                        trigger="hover"
                        target=".four"
                        colors="primary:#6e20ec,secondary:#fff"
                        style={{width:'100px',height:'100px'}}>
                    </lord-icon>
                        <b>Customize Support</b>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore necessitatibus </p>
                    </div>
                    <div className="service-item five">
                    <lord-icon
                        src="https://cdn.lordicon.com/jectmwqf.json"
                        trigger="hover"
                        target=".five"
                        colors="primary:#6e20ec,secondary:#fff"
                        style={{width:'100px',height:'100px'}}>
                    </lord-icon>
                        <b>Banding</b>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore necessitatibus </p>
                    </div>
                    <div className="service-item six">
                    <lord-icon
                        src="https://cdn.lordicon.com/fcyboqbm.json"
                        trigger="hover"
                        target=".six"
                        colors="primary:#6e20ec,secondary:#fff"
                        style={{width:'100px',height:'100px'}}>
                    </lord-icon>
                        <b>Marketing</b>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore necessitatibus </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Service;
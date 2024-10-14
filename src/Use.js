import {useState, useRef, useEffect} from 'react';

const Use = () => {
    const [val, setVal] = useState('')
    const count = useRef(null)

    useEffect(() => {
        count.current.focus();
    }, [])

    return ( 
        <>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} ref={count} />
        </> 
    );
}
 
export default Use;<>

</>
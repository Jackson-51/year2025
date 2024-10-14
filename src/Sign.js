import {useState} from 'react'
import './index.css';

const Sign = () => {

    const [inputs, setInputs] = useState({username:'', password:'', con_password:''});
    const [errors, setErrors] = useState({})

    const validate = () => {
        let new_Errors = {}

        if(inputs.username === ''){new_Errors.name = 'Invalid name'}
        if(inputs.password.match(/\d+/) === null){
            new_Errors.password = "password doesn't contain numbers"
        }
        if(inputs.password !== inputs.con_password){
            new_Errors.con_password = "password doesn't match"
        }
        setErrors(new_Errors);

        return Object.keys(new_Errors).length === 0;
    }

    const handleInput = (e) => {
        const {name, value} = e.target;

        setInputs({...inputs, [name] : value})
    }

    const eye_validity = (e) => {
        let label = e.target.closest('label');

        if (label) {
            let input_field = label.querySelector('input');
            input_field.type = input_field.type === 'password'? 'text': 'password';
    
        }
    }

    const submit_ = (e) => {
        e.preventDefault();

        if(validate()){
            console.log('validation successful')
        }
        else{
            console.log('validation failed')
        }
    }
   
    return ( 
        <div className="container">
            <form onSubmit={submit_}>
                <span>
                <i className ="fa-brands fa-bitcoin"></i>
                </span>

                <h1>Welcome, Sign Up here</h1>
                <label htmlFor="fullname">
                    <h3>Fullname</h3>
                    <input 
                    type="text" 
                    name = 'username'
                    placeholder ="user-names..." 
                    value={inputs.username}
                    onChange={handleInput} />
                    {errors.name && <p style={{color:"red", fontSize:'11px',position:'absolute', left:'0',bottom:'-15px'}}>{errors.name}</p>}
                </label>

                <label htmlFor="password">
                    <h3>Password</h3>
                    <input 
                    type="password" 
                    name = 'password'
                    value={inputs.password}
                    placeholder ="password"
                    onChange={handleInput} />
                    {errors.password && <p style={{color:"red",fontSize:'11px',position:'absolute', left:'0',bottom:'-15px'}}>{errors.password}</p>}
                    <span className='eye' onClick={eye_validity}>
                        <i className="fa-solid fa-eye"></i>
                    </span>
                </label>

                <label htmlFor="con_password">
                    <h3>Confirm Password</h3>
                    <input 
                    type="password" 
                    name = 'con_password'
                    value={inputs.con_password}
                    placeholder ="..." 
                    onChange={handleInput} />
                    {errors.con_password && <p style={{color:"red",fontSize:'11px',position:'absolute', left:'0',bottom:'-15px'}}>{errors.con_password}</p>}
                    <span className='eye' onClick={eye_validity}>
                        <i className="fa-solid fa-eye"></i>
                    </span>
                </label>

                <button type='submit'>Sign Up</button>
            </form>
        </div>
     );
}
 
export default Sign;
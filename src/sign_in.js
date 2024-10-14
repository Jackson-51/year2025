import {useState} from 'react'
import './login.css'

const Login = () => {
    const [login, setLogin] = useState({user:'', password:''});
    const [error, setError] = useState({});

    const dynamic = (e) => {
        const {name, value} = e.target;

        setLogin({...login, [name] : value})
    }

    const eye_validity = (e) => {
        let label = e.target.closest('label');

        if (label) {
            let input_field = label.querySelector('input');
            input_field.type = input_field.type === 'password'? 'text': 'password';
    
        }
    }

    const error_checking = () => {
        let errors = {}

        if(login.user !== 'jackson'){errors.user_error = 'invalid name'}
        if(login.password !== 'Temi1234???'){errors.password_error = "password doesn't contain number"}
        setError(errors)

        return Object.keys(errors).length === 0;
    }

    const val = (e) => {
        e.preventDefault()
        
        if(error_checking()){
            console.log('Login successful')
        }
        else{
            console.log('login failed')
        }
    }

    return ( 
        <div className="login">
            <form onSubmit={val}>
                 <span>
                    <i className ="fa-brands fa-bitcoin"></i>
                </span>

                <h1>Login to your account</h1>
                <label htmlFor="username"><h3>username:</h3>
                    <input 
                    type="text"
                    value={login.user}
                    name="user"
                    onChange={dynamic}
                    placeholder='username'
                    />
                    {error.user_error && <p style={{
                        color:"red",
                        fontSize:'11px',
                        position:'absolute', 
                        left:'0',
                        bottom:'-15px'
                        }}>{error.user_error}</p>}

                </label>

                <label htmlFor="password"><h3>password:</h3>
                    <input 
                    type="password"
                    value={login.password}
                    name="password"
                    onChange={dynamic}
                    placeholder='password'
                    />
                    <span className='eye' onClick={eye_validity}>
                        <i className="fa-solid fa-eye"></i>
                    </span>

                    {error.password_error && <p style={{
                        color:"red",
                        fontSize:'11px',
                        position:'absolute', 
                        left:'0',
                        bottom:'-15px'
                        }}>{error.password_error}</p>}
                </label>
                <button type='submit'>login</button>
            </form>
        </div>
     );
}
 
export default Login;
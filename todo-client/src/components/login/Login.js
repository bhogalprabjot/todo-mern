import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [showPass, setShowPass] = useState(false);
    const diaspatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            'email': '',
            'password': ''
        }
    )

    const handleChange = (event) => {
        if (event.target.name == 'email')
            setUser({ ...user, email: event.target.value });
        else
            setUser({ ...user, password: event.target.value });
        // console.log(user)
    }

    const handleSubmit = () => {
        diaspatch({ type: 'LOGIN', data: { user } });
        navigate('/');
        // console.log(user);
    }
    // const googleSuccess = (res)=>{
    //     console.log(res);
    // }
    // const googleFailure = ()=>{
    //     console.log("Google login error");   
    // }

    console.log("This is login");
    return (
        <div className='login'>
            <div className='login__title'>
                <h1>Log In</h1>
            </div>
            <div className='login__form'>
                <div className='login__form__ip'>
                    <input type="text" name='email' placeholder='Email' value={user.email} onChange={handleChange} />
                </div>
                {
                    showPass ?
                        <div className='login__form__ip'>
                            <input type="text" name='password' placeholder='Password' value={user.password} onChange={handleChange} />
                        </div> :
                        <div className='login__form__ip'>
                            <input type="password" name='password' placeholder='Password' value={user.password} onChange={handleChange} />
                        </div>
                }
                <div className='login__form__sp'>
                    <input type='checkbox' value={showPass} onChange={() => setShowPass(!showPass)} /><span>Show Password</span>
                </div>
                <div className='login__btns'>
                    <div className='login__btns__ip' onClick={handleSubmit}>
                        <span>Login</span>
                    </div>
                    {/* <GoogleLogin
                        clientId='GOOGLEID'
                        render={(renderProps) => (
                            <div className='login__btns__ip' onClick={renderProps.onClick} disabaled={renderProps.disabled}>
                                <FcGoogle size={'20px'} />
                                <span>Login with Google</span>
                            </div>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    /> */}
                </div>
                <Link to='/signup'>
                    <div className='login__link'>New here?</div >
                </Link>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';

const SignUp = () => {
    // console.log("This is signup");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false);

    const [user, setUser] = useState(
        {
            'firstName': '',
            'lastName': '',
            'email': '',
            'password': '',
            'confirmPassword': ''
        }
    )

    const handleChange = (event) => {
        // switch (event.target.name) {
        //     case 'firstName':
        //         setUser({ ...user, firstName: event.target.value });
        //         break;
        //     case 'lastName':
        //         setUser({ ...user, lastName: event.target.value });
        //         break;
        //     case 'email':
        //         setUser({ ...user, email: event.target.value });
        //         break;
        //     case 'password':
        //         setUser({ ...user, password: event.target.value });
        //         break;
        //     case 'confirmPassword':
        //         setUser({ ...user, confirmPassword: event.target.value });
        //         break;
        // }
        setUser({ ...user, [event.target.name]: event.target.value });
        // console.log(user)
    }

    const handleSubmit = () => {

        // add form validation
        dispatch(signup(user, navigate));
        console.log(user);
    }
    return (
        <div className='signup'>
            <div className='signup__title'>
                <h1>Sign Up</h1>
            </div>
            <div className='signup__form'>
                <div className='signup__form__ip'>
                    <input type="text" name="firstName" placeholder='First Name' value={user.firstName} onChange={handleChange} />
                </div>
                <div className='signup__form__ip'>
                    <input type="text" name='lastName' placeholder='Last Name' value={user.lastName} onChange={handleChange} />
                </div>
                <div className='signup__form__ip'>
                    <input type="text" name="email" placeholder='Email' value={user.email} onChange={handleChange} />
                </div>

                {
                    showPass ?
                        <div className='signup__form__ip'>
                            <input type="text" name="password" placeholder='Password' value={user.password} onChange={handleChange} />
                        </div> :
                        <div className='signup__form__ip'>
                            <input type="password" name="password" placeholder='Password' value={user.password} onChange={handleChange} />
                        </div>
                }
                {
                    showPass ?
                        <div className='signup__form__ip'>
                            <input type="text" name="confirmPassword" placeholder='Confirm Password' value={user.confirmPassword} onChange={handleChange} />
                        </div> :
                        <div className='signup__form__ip'>
                            <input type="password" name="confirmPassword" placeholder='Confirm Password' value={user.confirmPassword} onChange={handleChange} />
                        </div>
                }
                <div className='signup__form__sp'>
                    <input type='checkbox' value={showPass} onChange={() => setShowPass(!showPass)} /><span>Show Password</span>
                </div>
                <div className='signup__btns'>
                    <div className='signup__btns__ip' onClick={handleSubmit}>
                        <span>Sign Up</span>
                    </div>
                    {/* <div className='signup__btns__ip'>
                        <FcGoogle size={'20px'} />
                        <span>Login with Google</span>
                    </div> */}
                </div>

                <Link to='/login'>
                    <div className='signup__link'>Already a user?</div >
                </Link>
            </div>
        </div>
    );
};

export default SignUp;

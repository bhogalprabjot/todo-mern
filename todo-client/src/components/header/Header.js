import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch({type:'LOGOUT'});
        navigate('/login');
    }
    return (
        <div className='header'>
            <div className='nav'>
                <div className='logo'>
                    <a href='/'>Todo</a>
                </div>
                <div className='nav-items'>
                    <div className='signIn'>
                        <Link to='/login'>
                            {/* <span>Log in</span> */}
                            Log in
                        </Link>
                    </div>
                    <div className='signUp'>
                        <Link to='signup' >
                            {/* <span>Sign up</span> */}
                            Sign up
                        </Link>
                    </div>
                    <div className='signUp' onClick={logout}>
                        {/* <Link to='signup' >
                            Sign up
                        </Link> */}
                        Logout
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;

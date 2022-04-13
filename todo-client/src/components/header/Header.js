import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import decode from 'jwt-decode';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodeToken = decode(token);
            if (decodeToken.exp * 1000 < new Date().getTime())
                logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
            <div className='header'>
                <div className='nav'>
                    <div className='logo'>
                        <a href='/home'>Todo</a>
                    </div>
                    {
                        !user ?
                            <div className='nav-items'>
                                <div className='signIn'>
                                    <Link to='/'>
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
                            </div> :
                            <div className='nav-items'>
                                <div className='signUp' >
                                    Hey {user.result.name.split(" ")[0]}!
                                </div>
                                <div className='signUp' onClick={logout}>
                                    Logout?
                                </div>
                            </div>
                    }
                </div>
            </div >
            {/* <hr className='line' /> */}
        </>
    );
};

export default Header;

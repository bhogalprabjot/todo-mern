import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <div className='logo'>
                    <a href='/'>Todo</a>
                </div>
                <div className='nav-items'>
                    <div className='signIn'>
                        <span>Log in</span>
                    </div>
                    <div className='signUp'>
                        <span>Sign up</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

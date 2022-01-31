import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLists } from '../../actions/lists';
import HomeGrid from '../homeGrid/HomeGrid';
import './Home.css';

import { RiAddCircleFill } from 'react-icons/ri';
import { useLocation, useNavigate } from "react-router-dom";



const Home = () => {
    // const location = useLocation();
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))?.result);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("this is in home");
        dispatch(getLists(JSON.parse(localStorage.getItem('profile'))?.result._id));
    }, []);

    const addNewList = () => {
        navigate('/list/new')
    }

    return (
        <>
            <div className='home'>
                <HomeGrid />
            </div>
            <RiAddCircleFill className='addBtn' onClick={addNewList} />
        </>
    );
};

export default Home;

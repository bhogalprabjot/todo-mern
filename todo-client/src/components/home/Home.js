import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLists } from '../../actions/lists';
import HomeGrid from '../homeGrid/HomeGrid';
import './Home.css';

import { RiAddCircleFill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";


  
const Home = () => {
    console.log(JSON.parse(localStorage.getItem('profile')))

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        console.log("this is in home");
        dispatch(getLists());
    }, [dispatch]);

    const addNewList = () =>{
        navigate('/list/new')
    }

    return (
        <>
            <div className='home'>
                <HomeGrid />
            </div>
            <RiAddCircleFill className='addBtn' onClick={addNewList}/>
        </>
    );
};

export default Home;

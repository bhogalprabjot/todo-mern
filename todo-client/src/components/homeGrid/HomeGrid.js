import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListTile from '../listTile/ListTile';
import './HomeGrid.css';
import { useNavigate } from "react-router-dom";

import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteList } from '../../actions/lists';


const HomeGrid = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const states = useSelector((state) => state);
    // console.log("This is the store", states);
    const stateLists = useSelector((state) => state.lists);
    console.log("this is home grid", stateLists);
    const [lists, addList] = useState([]);

    useEffect(()=>{
        console.log("This is home grid useEffect");
        addList([...stateLists]);
    },[stateLists])

    const viewList = (id) =>{
        navigate(`/list/${id}`)
    }

    const removeList = (listId) =>{
        dispatch(deleteList(listId))
        // addList([...lists.filter(list => list.id!=listId)]);
        console.log("delete list", listId);
    }

    return (
        lists.length == 0 ?
            <div>
                No lists yet... create a new list!
            </div> :
            <div className="grid">
                {
                    lists.map((list) => {
                        // console.log(list.title)
                        return (
                            <div key={list.id} className='homeGrid' >
                                <div className='homeGrid__title' onClick={()=>viewList(list.id)}>
                                    {list.title}
                                </div>
                                <div className='deleteBtn' onClick={()=>removeList(list.id)}>
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    );
};

export default HomeGrid;

{/* below line gives error and keeps the home screen re-rendering infinitely*/ }
{/* <ListTile title={list.title}/> */ }
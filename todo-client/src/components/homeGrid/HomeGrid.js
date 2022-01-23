import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListTile from '../listTile/ListTile';
import './HomeGrid.css';
import { useNavigate } from "react-router-dom";

import { RiDeleteBin6Line } from 'react-icons/ri';


const HomeGrid = () => {
    const navigate = useNavigate();
    // const states = useSelector((state) => state);
    // console.log("This is the store", states);
    const lists = useSelector((state) => state.lists);
    // console.log("this is home grid", lists);

    const viewList = (id) =>{
        navigate(`/list/${id}`)
    }


    return (
        lists.length == 0 ?
            <div>
                No lists yet... create a new list!
            </div> :
            <div className="gird">
                {
                    lists.map((list) => {
                        // console.log(list.title)
                        return (
                            <div key={list.id} className='homeGrid' onClick={()=>viewList(list.id)}>
                                <div className='title'>
                                    {list.title}
                                </div>
                                <div className='deleteBtn'>
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
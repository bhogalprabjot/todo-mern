import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getLists } from '../../actions/lists';
import { connect } from 'react-redux';
import './HomeGrid.css';
import { useNavigate } from "react-router-dom";

import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteList } from '../../actions/lists';


const HomeGrid = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const s = useSelector((state) => state);
    const lists = useSelector(((state) => state.lists.lists));
    // const [lists, setLists] = useState();
    console.log(s);

    const viewList = (id) => {
        navigate(`/list/${id}`)
    }

    // useEffect(() => {
    //     console.log("this is in home");
    //     dispatch(getLists(JSON.parse(localStorage.getItem('profile'))?.result._id));
    // }, []);


    const removeList = (listId) => {
        dispatch(deleteList(listId));
        dispatch(getLists(JSON.parse(localStorage.getItem('profile'))?.result._id));
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
                            <div key={list._id} className='homeGrid' >
                                <div className='homeGrid__title' onClick={() => viewList(list._id)}>
                                    {list.title}
                                </div>
                                <div className='deleteBtn' onClick={() => removeList(list._id)}>
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    );
};

export default connect()(HomeGrid);

{/* below line gives error and keeps the home screen re-rendering infinitely*/ }
{/* <ListTile title={list.title}/> */ }
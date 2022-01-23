import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as api from '../../api/index';
import './ViewList.css';

const ViewList = () => {
    const { id } = useParams();

    console.log("This is list ", id);


    const [list, addList] = useState(
        {
            title: "",
            tasks: []
        }
    );

    useEffect(async () => {
        try {
            const { data } = await api.getListFromID(id);
            console.log("this is viewList", data)
            addList({ ...data });
            // console.log("this is ViewList", list);

        } catch (err) {
            console.log(err.message);
        }
    }, [])



    return (
        <div className='ViewList'>
            <div className='title'>
                <div className='titleText'>{list.title}</div>
            </div>
            <div className="taskList">
                {
                    list.tasks.map((task) => {
                        return (
                            <div key={task.id} className='taskList-item'>
                                <div className='taskList-item-text'>
                                    {task.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ViewList;

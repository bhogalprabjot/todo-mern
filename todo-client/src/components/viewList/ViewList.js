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


    const toggleComplete = (taskId) => {
        // const updatedTasks = list.tasks.map(task => task.id == taskId ? { ...task, isComplete: !task.isComplete } : task);
        const updatedTasks = [];
        let completedTask;
        for (let i = 0; i < list.tasks.length; i++) {
            if (list.tasks[i].id == taskId) {
                completedTask = list.tasks[i];
                completedTask.isComplete = !list.tasks[i].isComplete;
            } else {
                updatedTasks.push(list.tasks[i]);
            }
        }
        if(completedTask.isComplete)
            updatedTasks.push(completedTask);
        else
            updatedTasks.unshift(completedTask);

        addList({ ...list, tasks: [...updatedTasks] });

        console.log("Task Complete", taskId);

    }


    return (
        <div className='ViewList'>
            <div className='title'>
                <div className='titleText'>{list.title}</div>
            </div>
            <div className="taskList">
                {
                    list.tasks.map((task) => {
                        return (
                            !task.isComplete ?
                                <div key={task.id} className='taskList-item' onClick={() => toggleComplete(task.id)}>
                                    <div className='taskList-item-text'>
                                        {task.title}
                                    </div>
                                </div>
                                :
                                <div key={task.id} className='taskList-item-complete' onClick={() => toggleComplete(task.id)}>
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

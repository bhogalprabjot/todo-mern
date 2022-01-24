import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdKeyboardBackspace, MdAddCircle } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { VscCheck, VscEdit } from 'react-icons/vsc';

import * as api from '../../api/index';
import './ViewList.css';
import { updateList, addNewList } from '../../actions/lists';
import { v4 as uuidv4 } from 'uuid';


const ViewList = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("This is list ", id);


    const [list, addList] = useState(
        {
            title: "",
            tasks: []
        }
    );

    const [newTask, setNewTask] = useState(
        {
            id: "",
            title: "",
            isComplete: false
        }
    );
    const [isTitleSet, toggleTitleSet] = useState(id == 'new' ? false : true);

    useEffect(async () => {
        try {
            if (id != 'new') {
                const { data } = await api.getListFromID(id);
                console.log("this is viewList", data)
                addList({ ...data });
                // console.log("this is ViewList", list);
            }

        } catch (err) {
            console.log(err.message);
        }

        // return function autosave() {
        //     dispatch(updateList(list, id));
        // }

    }, [])

    // TAKE INPUT 
    const handleChange = (e) => {
        if (e.target.name == 'title')
            addList({ ...list, title: e.target.value });
        if (e.target.name == 'task')
            setNewTask(
                {
                    ...newTask,
                    id: uuidv4(),
                    title: e.target.value
                }
            );
        // console.log(list);
        // console.log(newTask);

    }
    // TO SET THE INITIAL TITLE VALUE
    const setTitle = () => {
        console.log("this is set title ", list)
        toggleTitleSet(true);
    }

    // TO EDIT TITLE
    const changeTitle = () => {
        toggleTitleSet(false);
    }

    // ADD NEW TASK TO LIST (AT BEGINING OF LIST)
    const addTask = () => {
        console.log("We are in new task");
        if (list.tasks) {
            let newT = JSON.parse(JSON.stringify(list.tasks));
            // newT.push(newTask); this adds at end
            newT.unshift(newTask);
            addList({ ...list, tasks: [...newT] });
        }
        setNewTask({
            id: "",
            title: "",
            isComplete: false
        });
        console.log(list);
        // console.log(newTask);

    }

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
        if (completedTask.isComplete1)
            updatedTasks.push(completedTask);
        else
            updatedTasks.unshift(completedTask);

        addList({ ...list, tasks: [...updatedTasks] });

        console.log("Task Complete", taskId);

    }

    // DELETE TASK
    const deleteTask = (taskId) => {
        addList({ ...list, tasks: [...list.tasks.filter(task => task.id != taskId)] })
        console.log("Task delete", taskId);
    }

    // EDIT TASK
    const editTask = (taskId) => {
        // toggleUpdateTask(true);
        const updatedTasks = list.tasks.map(task => task.id == taskId ? { ...task, title: "editied task title" } : task);
        addList({ ...list, tasks: [...updatedTasks] });
        console.log("Task edit", taskId);
    }

    const save = () => {
        if (id == 'new')
            dispatch(addNewList(list,navigate));
        else
            dispatch(updateList(list, id));


    }

    return (
        <div className='ViewList'>
            <div className='taskList-top-btns'>
                <a href='/' className='backBtn' onClick={save}><MdKeyboardBackspace /></a>
                <div className='saveBtn' onClick={save}>Save</div>
            </div>
            <div className='title'>
                {/* <div className='titleText'>{list.title}</div> */}
                {
                    !isTitleSet ?
                        <>
                            <input type="text" className='titleText' placeholder='Title' value={list.title} name='title' onChange={handleChange} />
                            <VscCheck className='viewList__tickBtn' onClick={setTitle} />
                        </>
                        :
                        <>
                            <div className='titleText'>{list.title}</div>
                            <VscEdit className='viewList__editBtn' onClick={changeTitle} />
                        </>


                }
            </div>
            <div className='taskInput'>
                <input type="text" className='taskText' placeholder='Task' value={newTask.title} name='task' onChange={handleChange} />
                <MdAddCircle className='viewList__addBtn' onClick={addTask} />
            </div>
            <div className="taskList">
                {
                    list.tasks.map((task) => {
                        return (
                            !task.isComplete ?
                                <div key={task.id} className='taskList-item' >
                                    <div className='taskList-item-text' onClick={() => toggleComplete(task.id)}>
                                        {task.title}
                                    </div>
                                    <div className='taskList-item-btns'>
                                        <div className='taskList-item-btn'>
                                            <AiOutlineDelete onClick={() => deleteTask(task.id)} />
                                        </div>
                                        <div className='taskList-item-btn'>
                                            <VscEdit onClick={() => editTask(task.id)} />
                                        </div>
                                    </div>

                                </div>
                                :
                                <div key={task.id} className='taskList-item-complete' onClick={() => toggleComplete(task.id)}>
                                    <div className='taskList-item-text'>
                                        {task.title}
                                    </div>
                                    <div className='taskList-item-btns'>
                                        <div className='taskList-item-btn'>
                                            <AiOutlineDelete onClick={() => deleteTask(task.id)} />
                                        </div>
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

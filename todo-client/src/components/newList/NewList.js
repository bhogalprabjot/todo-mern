// import React, { useState } from 'react';
// import { VscCheck, VscEdit } from 'react-icons/vsc';
// import { MdAddCircle, MdDeleteOutline } from 'react-icons/md';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { v4 as uuidv4 } from 'uuid';
// import { useSelector, useDispatch } from 'react-redux';

// import './NewList.css';
// import { addNewList } from '../../actions/lists';
// import { useNavigate } from "react-router-dom";

// const NewList = () => {
//     //------------------------------------------------
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const states = useSelector((state) => state);
//     console.log("This is the store", states);
//     // ---------------------------------------------------
//     const [newTask, setNewTask] = useState(
//         {
//             id: "",
//             title: "",
//             isComplete: false
//         }
//     );
//     const [list, addList] = useState(
//         {
//             title: "",
//             tasks: []
//         }
//     );
//     const [isTitleSet, toggleTitleSet] = useState(false);
//     // const [updateTask, toggleUpdateTask] = useState(false);
//     // const [updatedTaskTitle, setupdat = useState("");
//     const [editList, toggleEditList] = useState(false);
//     const [listSaved, toggleSaveList] = useState(false);

//     //----------------------------------------------------------

//     // TAKE INPUT 
//     const handleChange = (e) => {
//         if (e.target.name == 'title')
//             addList({ ...list, title: e.target.value });
//         if (e.target.name == 'task')
//             setNewTask(
//                 {
//                     ...newTask,
//                     id: uuidv4(),
//                     title: e.target.value
//                 }
//             );
//         // console.log(list);
//         // console.log(newTask);

//     }

//     // TO SET THE INITIAL TITLE VALUE
//     const setTitle = () => {
//         console.log("this is set title ", list)
//         toggleTitleSet(true);
//     }

//     // TO EDIT TITLE
//     const changeTitle = () => {
//         toggleTitleSet(false);
//     }

//     // ADD NEW TASK TO LIST (AT BEGINING OF LIST)
//     const addTask = () => {
//         console.log("We are in new task");
//         if (list.tasks) {
//             let newT = JSON.parse(JSON.stringify(list.tasks));
//             // newT.push(newTask); this adds at end
//             newT.unshift(newTask);
//             addList({ ...list, tasks: [...newT] });
//         }
//         setNewTask({
//             id: "",
//             title: "",
//             isComplete: false
//         });
//         console.log(list);
//         // console.log(newTask);

//     }

//     // DELETE TASK
//     const deleteTask = (taskId) => {
//         addList({ ...list, tasks: [...list.tasks.filter(task => task.id != taskId)] })
//         console.log("Task delete", taskId);
//     }

//     // EDIT TASK
//     const editTask = (taskId) => {
//         // toggleUpdateTask(true);
//         const updatedTasks = list.tasks.map(task => task.id == taskId ? { ...task, title: "editied task title" } : task);
//         addList({ ...list, tasks: [...updatedTasks] });
//         console.log("Task edit", taskId);
//     }


//     const saveListFn = () => {

//         dispatch(addNewList(list, navigate));
//         console.log("Save list");
//     }
//     const editListFn = () => {
//         console.log("Edit list");
//     }

//     // --------------------------------------------------------------

//     return (
//         <div className='newList'>
//             <div className='btnRow'>
//                 <div className='NewList__Btn' onClick={saveListFn}>Save</div>
//                 <div className='NewList__Btn' onClick={editListFn}>Edit</div>
//             </div>
//             <div className='title'>
//                 {
//                     !isTitleSet ?
//                         <>
//                             <input type="text" className='titleText' placeholder='Title' value={list.title} name='title' onChange={handleChange} />
//                             <VscCheck className='NewList__tickBtn' onClick={setTitle} />
//                         </>
//                         :
//                         <>
//                             <div className='titleText'>{list.title}</div>
//                             <VscEdit className='NewList__editBtn' onClick={changeTitle} />
//                         </>


//                 }
//             </div>
//             <div className='taskInput'>
//                 <input type="text" className='taskText' placeholder='Task' value={newTask.title} name='task' onChange={handleChange} />
//                 <MdAddCircle className='NewList__addBtn' onClick={addTask} />
//             </div>

//             <div className="taskList">
//                 {
//                     list.tasks.map((task) => {
//                         return (
//                             <div key={task.id} className='taskList-item'>
//                                 <div className='taskList-item-text'>
//                                     {task.title}
//                                 </div>
//                                 <div className='taskList-item-btns'>
//                                     <div className='taskList-item-btn'>
//                                         <AiOutlineDelete onClick={() => deleteTask(task.id)} />
//                                     </div>
//                                     <div className='taskList-item-btn'>
//                                         <VscEdit onClick={() => editTask(task.id)} />
//                                     </div>
//                                 </div>

//                             </div>
//                         )
//                     })
//                 }
//             </div>

//         </div>
//     );
// };

// export default NewList;

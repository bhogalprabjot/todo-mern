import * as api from '../api/index';
import { v4 as uuidv4 } from 'uuid';


export const getLists = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLists();
        console.log("this is action creator", data)
        dispatch({ type: "FETCH_ALL", payload: data });

    } catch (err) {
        console.log(err.message);
    }
}

export const addNewList = (newList, navigate) => async (dispatch) => {
    try {
        const lists = await api.fetchLists();
        newList = { ...newList, id: uuidv4(), userId: 1 };
        // console.log("this is action creator", newList);
        const { data } = await api.addList(newList);
        // console.log("this is action creator", data);
        dispatch({ type: "ADD_NEW_LIST", payload: data });
        navigate(`/list/${newList.id}`);

    } catch (err) {
        console.log(err.message);
    }
}

export const updateList = (newList, id) => async (dispatch) => {
    try {
        const { data } = await api.updateList(newList, id);
        console.log("this is action creator update", data);
        dispatch({ type: "UPDATE_LIST", payload: data });

    } catch (err) {
        console.log(err.message);
    }
}


export const deleteList = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteList(id);
        console.log("this is action creator delete", data);
        dispatch({ type: "DELETE_LIST", payload: id });

    } catch (err) {
        console.log(err.message);
    }
}
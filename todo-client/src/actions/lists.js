import * as api from '../api/index';

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
        newList = {...newList,  id: lists.data.length+1, userId: 1};
        // console.log("this is action creator", newList);
        const { data } = await api.addList(newList);
        // console.log("this is action creator", data);
        dispatch({ type: "ADD_NEW_LIST", payload: data });
        navigate(`/list/${newList.id}`);

    } catch (err) {
        console.log(err.message);
    }
}

import axios from 'axios';

const url = "http://localhost:5000";

export const fetchLists = () => axios.get(`${url}/list`);
export const addList = (newList) => axios.post(`${url}/list/`, newList);

export const getListFromID = (id) => axios.get(`${url}/list/${id}`);

export const updateList = (newList, id) => axios.put(`${url}/list/${id}`,newList);
export const deleteList = (id) => axios.delete(`${url}/list/${id}`);

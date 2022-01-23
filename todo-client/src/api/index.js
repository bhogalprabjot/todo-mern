import axios from 'axios';

const url = "http://localhost:4000";

export const fetchLists = () => axios.get(`${url}/lists`);
export const addList = (newList) => axios.post(`${url}/lists/`, newList);

export const getListFromID = (id) => axios.get(`${url}/lists/${id}`);
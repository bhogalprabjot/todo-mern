import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://backend-todo-mern.herokuapp.com' });


API.interceptors.request.use((req) => {
    if(JSON.parse(localStorage.getItem('profile')))
    {
        req.headers.Authorization = `Bearer ${ JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return  req;
})



export const fetchLists = (userId) => API.get(`/list/all/${userId}`);
export const addList = (newList) => API.post(`/list/`, newList);

export const getListFromID = (id) => API.get(`/list/${id}`);

export const updateList = (newList, id) => API.put(`/list/${id}`, newList);
export const deleteList = (id) => API.delete(`/list/${id}`);

export const login = (formData) => API.post('/user/login', formData);
export const signup = (formData) => API.post('/user/signup', formData);


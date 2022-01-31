import * as api from '../api/index';
import { v4 as uuidv4 } from 'uuid';

export const login = (user, navigate) => async (dispatch) => {
    try {
        // login
        const { data } = await api.login(user);
        dispatch({ type: 'AUTH', data });
        navigate('/');

    } catch (err) {
        console.log(err.message);
    }
}
export const signup = (user, navigate) => async (dispatch) => {
    try {
        // singup
        const { data } = await api.signup(user);
        console.log(data);
        dispatch({ type: 'AUTH', data });
        navigate('/');

    } catch (err) {
        console.log(err.message);
    }
}
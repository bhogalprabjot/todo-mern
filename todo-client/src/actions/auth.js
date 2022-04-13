import * as api from '../api/index';
import { v4 as uuidv4 } from 'uuid';

export const login = (user, navigate) => async (dispatch) => {
    try {
        // login
        dispatch({type: 'START_LOADING'});
        const { data } = await api.login(user);
        dispatch({ type: 'AUTH', data });
        dispatch({type: 'END_LOADING'});

        navigate('/home');

    } catch (err) {
        console.log(err.message);
    }
}
export const signup = (user, navigate) => async (dispatch) => {
    try {
        // singup
        dispatch({type: 'START_LOADING'});
        const { data } = await api.signup(user);
        console.log(data);
        dispatch({ type: 'AUTH', data });
        dispatch({type: 'END_LOADING'});
        navigate('/home');

    } catch (err) {
        console.log(err.message);
    }
}
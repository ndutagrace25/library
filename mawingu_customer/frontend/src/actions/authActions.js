import axios from 'axios';
import setAuthToken from '../utilities/setAuthToken';
import jwt_decode from 'jwt-decode';
import {
    GET_ERRORS,
    SET_CURRENT_PERSONNEL
} from './types';

//login - personnel
export const loginPersonnel = (userData) => dispatch => {
    axios.post('personnel/login', userData)
        .then(res => {
            //save to end point 
            const {
                accessToken
            } = res.data;
            //set token to ls
            localStorage.setItem('jwtToken', accessToken);
            //set token to auth header
            setAuthToken(accessToken);
            //decode token to get user data
            const decoded = jwt_decode(accessToken);
            //set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            // console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data.error
            })
        });
};

// set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_PERSONNEL,
        payload: decoded
    }
}

//log user out
export const logoutUser = () => dispatch => {
    //remove token from local storage
    localStorage.removeItem('jwtToken');
    //remove auth header for future requests
    setAuthToken(false);
    //set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}
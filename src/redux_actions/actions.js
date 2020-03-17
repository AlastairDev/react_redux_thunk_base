import axios from 'axios';
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './actions-constants';

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (msg) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: msg
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(fetchUsersSuccess(response.data))
            }).catch(err => {
                dispatch(fetchUsersFailure(err.message))
            })
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch(fetchUsersSuccess(response.data))
            }).catch(err => {
                dispatch(fetchUsersFailure(err.message))
            })
    }
}
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../redux_actions/actions-constants';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };

        default:
            return state;
    }
}
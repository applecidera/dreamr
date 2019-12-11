import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const errorReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    let newState = {};
    // debugger
    switch (action.type) {
        default:
            return prevState;
        case RECEIVE_CURRENT_USER:
            return prevState;
        case LOGOUT_CURRENT_USER:
            return prevState;
    }
};

export default errorReducer;

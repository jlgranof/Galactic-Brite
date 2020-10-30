import { SET_USER, REMOVE_USER, CREATE_USER } from '../actions/authActions'

export const auth = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case CREATE_USER:
            return action.user;
        case REMOVE_USER:
            return {}
        default:
            return state
    }
}

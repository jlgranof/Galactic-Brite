// import { CREATE_EVENT, DELETE_EVENT, GET_EVENTS } from '../actions/eventsActions'
import { GET_BOOKMARK_EVENTS } from '../actions/eventsActions'


export const registerSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch (action.type) {
        case GET_BOOKMARK_EVENTS:
            nextState.bookmarkEvents = [...action.bookmarkEvents]
            return nextState
        // case GET_EVENTS:
        //     nextState.events = [...action.events]
        //     return nextState
        // case CREATE_EVENT:
        //     return state;
        // case DELETE_EVENT:
        //     return state
        default:
            return state;
    }
}

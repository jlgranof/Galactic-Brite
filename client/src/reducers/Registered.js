import { GET_BOOKMARK_EVENTS, ADD_BOOKMARK } from '../actions/eventsActions'


export const registerSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch (action.type) {
        case GET_BOOKMARK_EVENTS:
            nextState.bookmarkEvents = [...action.bookmarkEvents]
            return nextState
        case ADD_BOOKMARK:
            return state
        default:
            return state;
    }
}

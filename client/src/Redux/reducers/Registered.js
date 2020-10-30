import { GET_BOOKMARK_EVENTS, ADD_BOOKMARK,REMOVE_BOOKMARK } from '../actions/eventsActions'


export const registerSlice = (state = [], action) => {
    Object.freeze(state)
    let nextState;
    switch (action.type) {
        case GET_BOOKMARK_EVENTS:
            nextState = [...action.bookmarkEvents]
            return nextState
        case ADD_BOOKMARK:
            nextState = [...state, ...action.bookmark]
            return nextState
        case REMOVE_BOOKMARK:
            return state
        default:
            return state;
    }
}

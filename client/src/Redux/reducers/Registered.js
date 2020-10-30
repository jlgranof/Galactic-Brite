import { GET_BOOKMARK_EVENTS, ADD_BOOKMARK } from '../actions/eventsActions'


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
        default:
            return state;
    }
}

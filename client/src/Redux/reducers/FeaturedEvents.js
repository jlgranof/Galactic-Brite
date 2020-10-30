import { CREATE_EVENT, DELETE_EVENT, GET_EVENTS } from '../actions/eventsActions'
import { GET_FEATURED_EVENTS } from '../actions/featuredActions'


export const eventsSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch (action.type) {
        case GET_FEATURED_EVENTS:
            nextState.featuredEvents = [...action.featuredEvents]
            return nextState
        case GET_EVENTS:
            nextState.events = [...action.events]
            return nextState
        case CREATE_EVENT:
            return state;
        case DELETE_EVENT:
            return state
        default:
            return state;
    }
}

import { CREATE_EVENT } from '../actions/eventsActions'
import { GET_FEATURED_EVENTS } from '../actions/featuredActions'
import { CREATE_EVENT} from '../actions/eventsActions'



export const featuredSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch (action.type) {
        case GET_FEATURED_EVENTS:
            nextState.events = [...action.events]
            return nextState
        case CREATE_EVENT:
            return state;
        default:
            return state;
    }
}

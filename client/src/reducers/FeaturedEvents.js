import { GET_FEATURED_EVENTS } from '../actions/featuredActions'

export const featuredSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}
    switch (action.type) {
        case GET_FEATURED_EVENTS:
            nextState.events = [...action.events]
            return nextState
        default:
            return state;
    }
}

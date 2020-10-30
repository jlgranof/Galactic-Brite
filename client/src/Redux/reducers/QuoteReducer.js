import { SET_QUOTE } from '../actions/quoteFront'

const INITIAL_STATE = {
    'quote': ''
}


export const quoteSlice = (state = {}, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return { 'quote' : action.payload }
        default:
            return state;
    }
}

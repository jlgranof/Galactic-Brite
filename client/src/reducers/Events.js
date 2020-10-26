import { CREATE_EVENT} from '../actions/eventsActions'
import { CREATE_EVENT } from '../actions/eventsActions';

export const auth = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return action.event;
        default:
            return state
    }
}


import {fetchFeaturedEvents} from './featuredActions'
export const GET_EVENTS = "GET EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const GET_BOOKMARK_EVENTS = "GET_BOOKMARK_EVENTS";

export const ADD_TICKET = "ADD TICKET";
export const ADD_BOOKMARK = "ADD BOOKMARK"
export const REMOVE_BOOKMARK = "REMOVE BOOKMARK"



//EVENT ACTIONS
export const getEvents = (events) => {
    //Events is an array of event objects?? maybe
    // need backend route first
    return {
        type: GET_EVENTS,
        events
    }
}
export const deleteEvent = (events) => {
    return {
        type: DELETE_EVENT,
    }
}
export const createEvent = () =>{
    return{
        type: CREATE_EVENT
    }
}
//BOOKMARK ACTIONS
export const getBookmarkEvents = (bookmarkEvents) => {
    return {
        type: GET_BOOKMARK_EVENTS,
        bookmarkEvents
    }
}
export const addBookmark = (bookmark) => {
    return {
        type: ADD_BOOKMARK,
        bookmark

    }
}
export const removeBookmark = (bookmark) => {
    return {
        type: REMOVE_BOOKMARK,
        bookmark

    }
}

//TICKET ACTIONS
export const addTicketForEvent = (ticket) => {

    return {
        type: ADD_TICKET,
        ticket
    }
}


//! THUNKS
export const fetchRandomEvents = (num) => {
    return async dispatch => {
        // fetch all random events
        const res = await fetch(`/api/events/random/${num}`)

        if (res.ok) {
            const data = await res.json();
            dispatch(getEvents(data));
        }
        return res;
    };
};
export const fetchBookmarkEventsThunk = (id) => {
    return async dispatch => {
        // fetch Bookmark event
        const res = await fetch(`/api/events/bookmarks/${id}`)

        if (res.ok) {
            const data = await res.json();
            dispatch(getBookmarkEvents(data));
        }
        return res;
    };
};

export const addBookmarkToUser = (details) => {
    return async dispatch => {
        // fetch Bookmark event
        const res = await fetch(`/api/events/bookmarks/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify(details),
        })

        if (res.ok) {
            const data = await res.json();
            const bookmark = [data]
            dispatch(addBookmark(bookmark));
        }
        return res;
    };
};
export const removeBookmarkThunk = (eventId, userId) => {
    return async dispatch => {
        // fetch Delete event
        const body = {'id': eventId}
        const res = await fetch(`/api/events/bookmarks/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify(body),
        })

        if (res.ok) {
            dispatch(fetchBookmarkEventsThunk(userId));
        }
        return res;
    };
};

export const createEventThunk = (event) => {
    return async dispatch => {
        // Post request for creating events
        const res = await fetch(`/api/events/custom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify(event),
        });
        if (res.ok) {
            dispatch(fetchFeaturedEvents());
        }
        return res;
    };
};
export const deleteEventThunk = (authId) => {
    return async dispatch => {
        // Post request for creating events
        const body = {
            host_id: authId
        }
        const res = await fetch(`/api/events`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify(body),
        });
        if (res.ok) {
            const data = await res.json();
            dispatch(deleteEvent());
        }
        return res;
    };
};

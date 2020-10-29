import Cookies from "js-cookie";
export const GET_EVENTS = "GET EVENTS";
export const ADD_TICKET = "ADD TICKET";
export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const GET_BOOKMARK_EVENTS = "GET_BOOKMARK_EVENTS";


// might swap over to have tickets as a separate action


//!ACTIONS
export const getEvents = (events) => {
    //Events is an array of event objects?? maybe
    // need backend route first
    return {
        type: GET_EVENTS,
        events
    }
}
export const getBookmarkEvents = (bookmarkEvents) => {
    return {
        type: GET_BOOKMARK_EVENTS,
        bookmarkEvents
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
export const addTicketForEvent = (ticket) => {
    //each ticket will include all ticket info, location, host, etc
    // console.log("created", ticket)
    return {
        type: ADD_TICKET,
        ticket
    }
}


//! THUNKS
//fetch all Events
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

export const createEventThunk = (event) => {
    return async dispatch => {
        // Post request for creating events
        const res = await fetch(`/api/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify(event),
        });
        if (res.ok) {
            const data = await res.json();
            dispatch(createEvent());
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




// export const addTicketsToUser = (ticket, userId) => {
//     return async dispatch => {
//         // no need to include userId to add, user included in body
//         const res = await fetch(`/api/tickets`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // no csrf yet??????
//                 // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
//             },
//             body: JSON.stringify({ ticket, userId }),
//         });

//         if (res.ok) {
//             const data = await res.json();
//             dispatch(addTicketForEvent(data));
//         }
//         return res;
//     };
// };

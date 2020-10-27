import Cookies from "js-cookie";
export const GET_EVENTS = "GET EVENTS";
export const ADD_TICKET = "ADD TICKET";

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
export const fetchEvents = (id) => {
    return async dispatch => {
        // fetch tickets for user id
        // const res = await fetch(`/api/events/${id}`)
        if (res.ok) {
            const data = await res.json();
            dispatch(getEvents(data));
        }
        return res;
    };
};




export const addTicketsToUser = (ticket, userId) => {
    return async dispatch => {
        // no need to include userId to add, user included in body
        const res = await fetch(`/api/tickets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // no csrf yet??????
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ ticket, userId }),
        });

        if (res.ok) {
            const data = await res.json();
            dispatch(addTicketForEvent(data));
        }
        return res;
    };
};


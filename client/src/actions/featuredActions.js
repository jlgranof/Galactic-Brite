import Cookies from "js-cookie";
export const GET_FEATURED_EVENTS = "GET FEATURED EVENTS";
export const ADD_TICKET = "ADD TICKET";

// might swap over to have tickets as a separate action




//!ACTIONS
export const getFeaturedEvents = (featuredEvents) => {
    //Events is an array of event objects?? maybe
    // need backend route first
    return {
        type: GET_FEATURED_EVENTS,
        featuredEvents
    }
}


//! THUNKS
//fetch all Featured Events
export const fetchFeaturedEvents = () => {
    return async dispatch => {
        // fetch featuredEvents
        const res = await fetch(`/api/events/featured`)
        if (res.ok) {
            const data = await res.json();
            dispatch(getFeaturedEvents(data));
        }
        return res;
    };
};

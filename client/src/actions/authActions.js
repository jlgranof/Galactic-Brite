import Cookies from "js-cookie";

export const SET_USER = "SET USER";
export const REMOVE_USER = "REMOVE USER";


//!ACTIONS
export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

//! THUNKS
//login
export const login = (email, password) => {
    return async dispatch => {
        const res = await fetch(`/api/session/login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                // "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            // dispatch(setUser(data.user));
        }
        return res;
    };
};
//logout
export const logout = () => async dispatch => {
    const res = await fetch('/api/session', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
        }
    });
    if (res.ok) {
        dispatch(removeUser());
    }
}


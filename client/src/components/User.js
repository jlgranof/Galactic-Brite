import React from 'react';

import Header from './Header/Header'


function User(props) {
    return (
        <>
            <Header/>
            <strong>Username:</strong> {props.user.username}<br />
            <strong>Email:</strong> {props.user.email}<br />
            <hr />
        </>
    );
}
export default User;
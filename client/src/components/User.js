import React from 'react';



function User(props) {
    return (
        <>

            <strong style={{color:"white"}}>
                Username:
                {props.user.username}
            </strong>

            <br />
            <strong style={{ color: "white" }}>
                Email:
                {props.user.email}
                </strong>
                <br />
            <hr />
        </>
    );
}
export default User;

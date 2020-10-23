import React from 'react';
import { NavLink } from 'react-router-dom';


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    leftLinkBox: {
        padding: "30px",
    },
})

const RightHeaderLinks = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.leftLinkBox}>
                <Button>
                    <NavLink to="/" activeclass="active">Home</NavLink>
                </Button>
                <Button>
                    <NavLink to="/login-page" activeclass="active">login</NavLink>
                </Button>
                <Button>
                    <NavLink to="/signup-page" activeclass="active">signup</NavLink>
                </Button>
            </div>
        </>
    );
};

export default RightHeaderLinks;
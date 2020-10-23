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
                    <NavLink to="/users" activeclass="active">Users</NavLink>
                </Button>
                <Button>
                    <NavLink to="/test-page" activeclass="active">Test Page</NavLink>
                </Button>
            </div>
        </>
    );
};

export default RightHeaderLinks;
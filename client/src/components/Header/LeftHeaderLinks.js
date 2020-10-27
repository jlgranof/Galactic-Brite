import React from 'react';
import { NavLink } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    leftLinkBox: {
        padding: "30px",
    },
    eachLink: {
        clipPath: "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)"
    }
})

const LeftHeaderLinks = ({inherit}) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.leftLinkBox}>
                <Button>
                    <NavLink className={inherit} to="/users" activeclass="active">Users</NavLink>
                </Button>
                <Button>
                    <NavLink className={inherit} to="/dashboard" activeclass="active">Dashboard</NavLink>
                </Button>
                <Button variant="contained">
                    <NavLink className={inherit} to="/secondTest-page" activeclass="active">Second Test</NavLink>
                </Button>
            </div>
        </>
    );
};

export default LeftHeaderLinks;

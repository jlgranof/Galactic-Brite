import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// assets
import logo from '../../assets/images/logo4.png'

const useStyles = makeStyles({
    logo: {
        width: "340px",
        height: "340px",
    },
})


const HeaderLogo = () => {
    const classes = useStyles()
    return (
        <div>
            <img 
            className={classes.logo}
            src="https://i.imgur.com/snZc7C6.png"/>
        </div>
    );
};

export default HeaderLogo;
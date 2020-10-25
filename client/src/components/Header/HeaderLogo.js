import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// assets
import logo from '../../assets/images/logo4.png'

const useStyles = makeStyles({
    logo: {
        width: "140px",
        height: "140px",
        color: "white"
    },
})


const HeaderLogo = () => {
    const classes = useStyles()
    return (
        <div>
            <img 
            className={classes.logo}
            src={logo}/>
        </div>
    );
};

export default HeaderLogo;
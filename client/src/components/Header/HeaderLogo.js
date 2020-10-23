import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    logo: {
        color: "black"
    },
})


const HeaderLogo = () => {
    const classes = useStyles()
    return (
        <div className={classes.logo}>
            Logo
        </div>
    );
};

export default HeaderLogo;
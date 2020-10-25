import React from 'react';


//assets
import trooper from '../../assets/images/falcon.jpg'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    trooper: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "fixed",
        height: "100vh",
        width: "100vw"
    },
})

const TestingPurposesLandingPageBackground = () => {
    const classes = useStyles()
    return (
        <div>
            <img className={classes.trooper} src={trooper}/>
        </div>
    );
};

export default TestingPurposesLandingPageBackground;
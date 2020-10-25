import React from 'react';

// core components
import Header from '../Header/Header'

// assets
import fallenJedi from '../../assets/images/fallenJedi2.jpg'
import raining from '../../assets/images/raining.gif'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes
import classNames from "classnames";



const useStyles = makeStyles({
    fallenJedi: {
        position: "absolute",
        width: "100vw",
        height: "100vh",
    },
    background: {
        position: "absolute",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
    },
    mainRain: {
        position: "absolute",
        opacity: .1,
        transform: "rotate(-35deg)",
    },
    rainCenter: {
        top: 0,
        width: "100%",
        height: "100%",
    },
    rainBottom: {
        right: 0,
        bottom: 0,
        alignSelf: "bottom",
    },
})

const LoginPageBackground = () => {
    const classes = useStyles()
    return (
        <>
        <Header/>
        <div className={classes.overlay}>
        </div>
            <div className={classes.background}>
                <img className={classes.fallenJedi}src={fallenJedi} alt="fighter.gif" />
                <div>
                    <img className={classNames(classes.mainRain, classes.rainCenter)} src={raining} alt="raining.gif" />
                </div>
                <div>
                    <img className={classes.mainRain} src={raining} alt="raining.gif" />
                </div>
                <div>
                    <img className={classNames(classes.mainRain, classes.rainBottom)} src={raining} alt="raining.gif" />
                </div>
            </div>
        </>
    );
};

export default LoginPageBackground;
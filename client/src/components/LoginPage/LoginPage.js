import React, { useState, useEffect }  from 'react';

// core components
import CustomInput from '../SupportComponents/CustomInput'

// nodejs library that concatenates classes
import classNames from "classnames";

// assets
import fallenJedi from '../../assets/images/fallenJedi2.jpg'
import raining from '../../assets/images/raining.gif'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    login: {
        position: "fixed",
        width: "100vw",
        height: "100vh",
    },
    rain: {
        position: "fixed",
        opacity: .2,
        top: 0,
        width: "100%",
        height: "100%",
        top: 0,
        transform: "rotate(-35deg)",
        overflow: "hidden",
    },
    rainTop: {
        diplay: "flex",
        position: "fixed",
        opacity: .2,
        transform: "rotate(-35deg)",
        overflow: "hidden",
    },
    rainBottom: {
        position: "absolute",
        right: 0,
        bottom: 0,
        alignSelf: "bottom",
        opacity: .2,
        transform: "rotate(-35deg)",
        overflow: "hidden",
    }
})

const LoginPage = () => {
    const classes = useStyles()
    return (
        <>
            <CustomInput/>
            <div className={classes.login}>
                <img className={classes.login} src={fallenJedi} alt="fighter.gif" />
                <div>
                    <img className={classes.rain} src={raining} alt="fighter.gif" />
                </div>
                <div>
                    <img className={classes.rainTop} src={raining} alt="fighter.gif" />
                </div>
                <div>
                    <img className={classes.rainBottom} src={raining} alt="fighter.gif" />
                </div>
            </div>
        </>
    );
};

export default LoginPage;
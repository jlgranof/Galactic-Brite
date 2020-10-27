import React, { useState, useEffect } from 'react';

// core components
import Header from '../Header/Header'


// nodejs library that concatenates classes
import classNames from "classnames";

// assets
import xWing from '../../assets/images/fighter.gif'
import hanger from '../../assets/images/hanger.jpg'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles({
    warZone: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
    },
    hanger: {
        animationName: "fadeInOpacity",
        animationIterationCount: 1,
        animationTimingFunction: "ease-in",
        animationDuration: "2s",
    },
})

const TestPage = () => {
    const classes = useStyles()
    const [gifLoading, setGifLoading] = useState(true)
    const [profileVisible, setProfileVisible] = useState(false)

    useEffect(() => {
        const firstTimer = setTimeout(() => setGifLoading(()=> false), 1400)
        const secondTimer = setTimeout(() => setProfileVisible(()=> true), 1400)

        return () => {
            clearTimeout(firstTimer)
            clearTimeout(secondTimer)
        }
    }, [gifLoading])


    return (
        <>
            <Header/>
            {gifLoading ?
                    <div>
                        <img className={classes.warZone} src={xWing} alt="fighter.gif" />
                    </div>
            : null}
            {profileVisible ?
                    <Fade in={true} timeout={1000}>
                    <img className={classNames(classes.hanger, classes.warZone)} src={hanger} alt="fighter.gif" />
                    </Fade>
            : null }
        </>
    );
};

export default TestPage;
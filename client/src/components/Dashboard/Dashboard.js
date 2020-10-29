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
import SwitchListSecondary from "./listComponent";
// import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import { useSelector } from 'react-redux';



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
    container:{
        display: 'grid',
        gridTemplateRows: '230px 1fr 1fr',
        backgroundImage: `url(${hanger})`
    },
    seeMe:{
        gridRowStart: '2',
        textAlign: 'right',
        backgroundColor: 'white',
        zIndex: '100'
    }
})

const TestPage = () => {
    const classes = useStyles()
    const [gifLoading, setGifLoading] = useState(true)
    const [profileVisible, setProfileVisible] = useState(false)
    const id = useSelector((state) => state.auth.id)
    const avatar = useSelector((state) => state.auth.avatar_url)
    const email = useSelector((state) => state.auth.email)
    const userName = useSelector((state) => state.auth.username)
    const [checked, setChecked] = useState([]);
    console.log(checked)
    useEffect(() => {
        const firstTimer = setTimeout(() => setGifLoading(() => false), 14)
        const secondTimer = setTimeout(() => setProfileVisible(() => true), 1)

        return () => {
            clearTimeout(firstTimer)
            clearTimeout(secondTimer)
        }
    }, [gifLoading])


    return (
        <>
            <Header />
            {gifLoading ?
                <div>
                    <img className={classes.warZone} src={xWing} alt="fighter.gif" />
                </div>
                : null}
            {profileVisible ?
                <>
                <div className={classes.container}>
                    <div className={classes.seeMe}>

                        <h1 >This works</h1>
                        <h3>{`${userName}`}</h3>
                        <h3>{`${email}`}</h3>
                        <img src={avatar}></img>
                        <SwitchListSecondary checked={checked} setChecked={setChecked}/>
                    </div>
                </div>
                {/* <Fade in={true} timeout={1000}>
                    <img className={classNames(classes.hanger, classes.warZone)} src={hanger} alt="fighter.gif" />
                </Fade> */}
                </>
                : null}
        </>
    );
};

export default TestPage;

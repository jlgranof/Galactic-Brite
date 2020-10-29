
import React, { useState, useEffect, } from 'react';
import { useDispatch,useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'


// core components
import Header from '../Header/Header'

//redux
import { useSelector } from 'react-redux';


// nodejs library that concatenates classes
import classNames from "classnames";

// assets
import xWing from '../../assets/images/fighter.gif'
import hanger from '../../assets/images/hanger.jpg'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import SwitchListSecondary from "./listComponent";
import Fade from '@material-ui/core/Fade';

import { fetchBookmarkEventsThunk } from '../../actions/eventsActions';




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
    const history = useHistory()
    const [gifLoading, setGifLoading] = useState(true)
    const [profileVisible, setProfileVisible] = useState(false)
    const id = useSelector((state) => state.auth.id)
    const avatar = useSelector((state) => state.auth.avatar_url)
    const email = useSelector((state) => state.auth.email)
    const userName = useSelector((state) => state.auth.username)
    const [checked, setChecked] = useState([]);


    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchBookmarkEventsThunk(id))
    })

    useEffect(() => {
        const firstTimer = setTimeout(() => setGifLoading(() => false), 1400)
        const secondTimer = setTimeout(() => setProfileVisible(() => true), 1400)

        return () => {
            clearTimeout(firstTimer)
            clearTimeout(secondTimer)
        }
    }, [gifLoading])

    if (!id) history.push("/")
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

                {/* card container */}
                <div>
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


import React, { useState, useEffect, } from 'react';
import {useHistory} from 'react-router-dom'


// core components
import Header from '../Header/Header'

//redux
import { useDispatch,useSelector } from "react-redux";



// assets
import xWing from '../../assets/images/fighter.gif'
import hanger from '../../assets/images/hanger.jpg'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import SwitchListSecondary from "./listComponent";
import Fade from '@material-ui/core/Fade';
import Card from './card';
import BookmarkCarousel from './Carousel';

// Thunks
import { fetchBookmarkEventsThunk } from '../../Redux/actions/eventsActions';
import zIndex from '@material-ui/core/styles/zIndex';





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
        gridTemplateRows: '80px 1fr ',
        gridTemplateColumns: '3fr 10fr 1fr',
    },
    seeMe:{
        backgroundImage: `${hanger}`,
        margin: "200px 0",
        padding: "50px",
        gridRowStart: '2',
        gridColumnStart: '2',
        backgroundColor: 'Black',
        zIndex: '100',
        width: '75%',
        boxShadow: '15px 15px 30px purple',
        borderRadius: '10px',
    },
    white:{
        borderRadius: '10px',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'Center',
        paddingBottom:'50px'
    },
    bookmark:{
        display: 'flexbox',
        textAlign: 'center',
        alignContent: 'flexend',
        color: 'white',
        paddingBottom: '30px'
    },
    avatar:{
        height: '150px',
        width: '150px',
        borderRadius: '50%'
    },

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
    const registerSlice = useSelector((state) => state.registerSlice)
    const dispatch = useDispatch()

    useEffect(() =>{
        if(id){
            dispatch(fetchBookmarkEventsThunk(id))
        }

    },[id])

    const cards = registerSlice ? registerSlice.map((ele,i)=>{
        const randomNum = Math.floor(Math.random() * Math.floor(8));
        return <Card key={i} name={ele.event_name} id={ele.id} authId={id} eventId={ele.id} randomNum={randomNum}/>
        }): null

    useEffect(() => {
        const firstTimer = setTimeout(() => setGifLoading(() => false), 1400)
        const secondTimer = setTimeout(() => setProfileVisible(() => true), 1400)

        return () => {
            clearTimeout(firstTimer)
            clearTimeout(secondTimer)
        }
    }, [gifLoading])

    return (
        <>
            <Header />
            {/* {gifLoading ?
                <div>
                    <img className={classes.warZone} src={xWing} alt="fighter.gif" />
                </div>
                : null} */}
            {profileVisible ?
                <>
            {/* <Fade in={true} timeout={1000}> */}
                <div className={classes.container}>
                    <div className={classes.seeMe}>
                        <div className={classes.white}>
                        <img src={avatar } className={classes.avatar}></img>
                        <h3>{` UserName:${userName}`}</h3>
                        <h3>{`Email:${email}`}</h3>
                        </div>
                        {/* <SwitchListSecondary checked={checked} setChecked={setChecked}/> */}
                        <h1 className={classes.bookmark}>Bookmaked Events</h1>
                        <div>
                            <BookmarkCarousel cards={cards}/>
                        </div>
                    </div>
                </div>
            {/* </Fade> */}
                </>
                : null}
        </>
    );
};

export default TestPage;

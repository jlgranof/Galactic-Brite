import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom'

//core components
import Header from '../Header/Header'

//assets
import eventDetailsPic from '../../assets/images/EventDetails3.jpg'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { addBookmarkToUser } from '../../Redux/actions/eventsActions'

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// material-ui/icons
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles({

    img: {
        zIndex: 1,
        position: "relative",
        width: "100%",
        height: "80%",
        padding: "0",
        margin: "0",
        boxSizing: "border-box"
    },
    mainBody: {
        zIndex: 100,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(20,20,20)",
        width: "100%",
        boxShadow: "1px 1px 20px red",
        height: "1200px"
    },
    card: {
        marginTop: "-200px",
        borderRadius: "20px",
        width: "70%",
        color: "rgb(200,200,200)",
        boxShadow: " inset 1px 0 2000px rgb(50, 15, 11), 1px 1px 20px red",
        background: "rgb(20, 20, 20)",
        background: "linear-gradient(90deg, rgba(10, 10, 10, 1) 4%, rgba(40, 40, 40, 1) 50%, rgba(10, 10, 10, 1) 96%)",
        padding: "40px 80px 80px 80px",
        height: "1200px"
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        color: "rgb(250,250,250)",
        borderBottom: "1px solid grey",
    },
    avatar: {
        borderRadius: "10px",
        margin: "10px 80px 60px 30px",
        boxShadow: "1px 1px 10px red",
        width: "400px",
        height: "300px"
    },
    cardTitle: {
        margin: "50px 200px 100px 0",
        fontFamily: "Helvetica Neue",
        fontSize: "40px",
        borderBottom: "1px solid grey",
        width: "60%",
        height: "100px",

    },
    cardLinkbox:{
        display: "flex",
        margin: "50px 50px 0 0"
    },
    cardLink: {
        display: "flex",
        height: "100px",
        padding: "30px"
    },
    icon: {
        color: "red",
        fontSize: "50px",
        opacity: ".7",
        transition: ".2s",
        "&:hover": {
            opacity: 1,
            transform: "scale(1.1)"
        }
    },
    cardTextHover: {
        fontSize: "18px",
        fontWeight: "800",
        fontFamily: "Helvetica Neue",
        color: "red",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        opacity: ".5",
        transition: ".2s",
        "&:hover": {
            opacity: 1,
            transform: "scale(1.1)"
        }
    },
    cardSubHeader: {
        margin: "20px",
        color: "red",
        fontSize: "20px",
        borderBottom: "1px solid grey",
        width: "400px",
        padding: "20px",
        fontFamily: "Helvetica Neue"
    },
    cardBody: {
        display: "flex",
        width: "100%",
        fontSize: "150%",
        flexDirection: "column",
        textAlign: "center",
        
    },
    cardContent: {
        width: "100%",
        padding: "20px 0 20px 0"
    },
    cardFooter: {

    },
    planet: {
        fontFamily: "monospace",
        color: "rgb(220,220,220)",
        fontSize: "40px",
        paddingBottom: '20px',
        width: "100%"
    },
    featured: {
        display: "flex",
        justifyContent: "center",
        fontWeight: "900",
        fontFamily: "monospace",
        fontSize: '40px',
        backgroundImage: "linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(232,166,65,1) 50%, rgba(10,10,10,1) 96%)",
        WebkitBackgroundClip: "text",
        textFillColor: "transparent",
        marginTop: "20px",
        width: "100%",
    }
})

const EventDetails = () => {
    const classes = useStyles()
    const location = useLocation()
    const {
        avatar,
        date,
        description,
        eventName,
        featured,
        id,
        planet
    } = location.state
    console.log(location)
    return (
        <>
            <Header/>
            <img className={classes.img} src={eventDetailsPic}/>


            <div
            className={classes.mainBody}
            >
                <div className={classes.card}>
                    <div className={classes.cardHeader}>
                        <img
                        className={classes.avatar}
                        src={avatar}
                        />
                        <div className={classes.cardTitle}>
                            {eventName}
                        </div>
                        <div className={classes.cardLinkbox}>
                            <div className={classes.cardLink}>
                                <BookmarkBorderIcon 
                                className={classes.icon}
                                />
                            </div>
                            <div className={classNames(classes.cardLink, classes.cardTextHover)}>
                                Buy a
                                ticket
                            </div>

                        </div>
                    </div>
                    {true ? <div className={classes.featured}>
                        FEATURED EVENT
                    </div>: null}
                    <div className={classes.cardSubHeader}>
                        <div className={classes.planet}>
                            Planet {planet}
                        </div>
                        {date}
                    </div>
                    <div className={classes.cardBody}>
                        <div className={classes.cardContent}>
                            {description.description}
                        </div>
                        <div className={classes.cardContent}>
                            {description.details_1}
                        </div>
                        <div className={classes.cardContent}>
                            {description.details_2}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default EventDetails;
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

//core components
import Header from '../Header/Header'


// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


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
            background: "rgb(210,210,210)",
            width: "100%",
            height: "1300px"
        },
        card: {
            marginTop: "-200px",
            borderRadius: "20px",
            width: "70%",
            height: "99%",
            color: "rgb(200,200,200)",
            background: "rgb(250, 250, 250)",
            padding: "40px 80px 80px 80px",
            boxShadow: "1px 1px 20px black",
        },
        cardHeader: {
            display: "flex",
            justifyContent: "space-between",
            color: "rgb(250,250,250)",
            borderBottom: "1px solid grey",
        },
        avatar: {
            borderRadius: "50%",
            margin: "10px 40px 60px 40px",
            background: "white",
            boxShadow: "1px 1px 10px rgb(40,40,40)",
            width: "200px",
            height: "200px",
            marginTop: "-160px"
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
        formatSub: {
            display: "flex",
            height: "300px"
        },

        cardSubHeader: {
            display: "absolute",
            color: "black",
            fontSize: "20px",
            borderBottom: "1px solid grey",
            width: "400px",
        },
        
    })

const AboutUsPage = () => {
    const classes = useStyles()
    

    return (
        <>
            <Header/>
            <img className={classes.img} src="https://i.imgur.com/rM4oRiL.jpeg"/>
            <div
            className={classes.mainBody}
            >
                <div className={classes.card}>
                    <div className={classes.cardHeader}>
                        <div className={classes.avatar}></div>
                        <img className={classes.avatar} src="https://i.imgur.com/m4E65tw.png"/>
                        <img className={classes.avatar} src="https://render.bitstrips.com/v2/cpanel/6972338-306843206_17-s5-v1.png?transparent=1&palette=1"></img>
                        <img className={classes.avatar} src="https://i.imgur.com/Kz0SpmR.jpg"/>
                        
                    </div> 
                    <div className={classes.formatSub}>
                        <div className={classes.cardSubHeader}>
                            <p>Hello</p>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                        <div className={classes.cardSubHeader}>
                            <p>Hello</p>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                        <div className={classes.cardSubHeader}>
                            <p>Hello</p>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                        <div className={classes.cardSubHeader}>
                            <p>Hello</p>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                    </div>
                    
                        {/* <div className={classes.cardTitle}> 
                            Hello
                        </div> */}
                        {/* <div className={classes.cardLinkbox}>
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
                        </div>   */}
                    
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
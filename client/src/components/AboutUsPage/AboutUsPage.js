import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from '@material-ui/core'


//core components
import Header from '../Header/Header'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

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
        height: "600px"
    },
    card: {
        marginTop: "-190px",
        borderRadius: "20px",
        width: "70%",
        height: "98%",
        color: "rgb(200,200,200)",
        background: "rgb(250, 250, 250)",
        padding: "40px 80px 80px 80px",
        boxShadow: "1px 1px 20px black",
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
        color: "rgb(250,250,250)",
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
    cardLinkbox: {
        display: "flex",
        margin: "50px 50px 0 0"
    },
    cardLink: {
        display: "flex",
        height: "100px",
        padding: "30px"
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "30px",
        height: "150px",
        
    },

    formatSub: {
        display: "flex",
        height: "300px"
    },

    cardSubHeader: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        fontSize: "20px",
        width: "400px",
    },
    rootInfo: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "15px"
    },
    aboutPara: {
        height: "100px",
        padding: "15px",
        textAlign: "center",
        color: "grey"
    },
    techHeader: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "40px",
        fontFamily: "monospace",
    },
    alignBorder : {
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid black",
        width: "60%",
        paddingBottom: "10px"
    },
    githubRed: {
        color: "black",
        "&:hover": {
            color: 'red'
        }
    },


})

const AboutUsPage = () => {
    const classes = useStyles()


    return (
        <>
            <Header />
            <img className={classes.img} src="https://i.imgur.com/rM4oRiL.jpeg" />
            <div
                className={classes.mainBody}
            >
                <div className={classes.card}>
                    <div className={classes.cardHeader}>
                        <img className={classes.avatar} src="https://i.imgur.com/Y9qrVEI.png" />
                        <img className={classes.avatar} src="https://i.imgur.com/m4E65tw.png" />
                        <img className={classes.avatar} src="https://render.bitstrips.com/v2/cpanel/6972338-306843206_17-s5-v1.png?transparent=1&palette=1"></img>
                        <img className={classes.avatar} src="https://i.imgur.com/Kz0SpmR.jpg" />

                    </div>
                    <div className={classes.formatSub}>
                        <div className={classes.cardSubHeader}>
                            <h3>James White</h3>
                            <div className={classes.rootInfo}>
                                <div>
                                    <Link style={{ textDecoration: "none" }} href='https://github.com/whitejamesthe2nd'><GitHubIcon className={classes.githubRed}/></Link>
                                    <Link style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/james-white-b0343b160/'><LinkedInIcon className={classes.githubRed}/></Link>
                                    <Link style={{ textDecoration: "none" }} href='https://www.instagram.com/mind_over_motivation'><InstagramIcon className={classes.githubRed}/></Link>

                                </div>
                                <div className={classes.aboutPara}>
                                    <p>We are all nerds except for kasey he is a country oil digging and only eats the cow if it's still mooing</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardSubHeader}>
                            <h3>Jeff Granof</h3>
                            <div className={classes.rootInfo}>
                                <div>
                                    <Link style={{ textDecoration: "none" }} href='https://github.com/https://github.com/jlgranof'><GitHubIcon className={classes.githubRed}/></Link>
                                    <Link style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/jeff-granof-2399941b5/'><LinkedInIcon className={classes.githubRed}/></Link>
                                </div>
                                <div className={classes.aboutPara}>
                                    <p>We are all nerds except for kasey he is a country oil digging and only eats the cow if it's still mooing</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardSubHeader}>
                            <h3>Alec Garcia</h3>
                            <div className={classes.rootInfo}>
                                <div>
                                    <Link style={{ textDecoration: "none" }} href='https://github.com/alecbrando'><GitHubIcon className={classes.githubRed}/></Link>
                                    <Link style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/alec-garcia-4159b0169/'><LinkedInIcon className={classes.githubRed}/></Link>
                                    <Link style={{ textDecoration: "none" }} href='https://www.instagram.com/alecgarcia_ace/'><InstagramIcon className={classes.githubRed}/></Link>
                                </div>
                                <div className={classes.aboutPara}>
                                    <p>We are all nerds except for kasey he is a country oil digging and only eats the cow if it's still mooing</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cardSubHeader}>
                            <h3>Kasey Mcgee</h3>
                            <div className={classes.rootInfo}>
                                <div>
                                    <Link style={{ textDecoration: "none" }} href='https://github.com/Kmcgee92'><GitHubIcon className={classes.githubRed}/></Link>
                                    <Link style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/kasey-mcgee-37aa8979/'><LinkedInIcon className={classes.githubRed}/></Link>
                                    <Link style={{ textDecoration: "none" }} href='https://www.instagram.com/mcgeekasey/'><InstagramIcon className={classes.githubRed}/></Link>
                                </div>
                                <div className={classes.aboutPara}>
                                    <p>We are all nerds except for kasey he is a country oil digging and only eats the cow if it's still mooing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.techHeader}>
                        <h3 className={classes.alignBorder}>Technologies</h3>
                    </div>
                    <div className={classes.icons}>
                        <img height="90px" width="80px" src="https://i.imgur.com/zEzj6iR.png"/>
                        <img height="90px" width="80px" src="http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png"/>
                        <img height="90px" width="80px" src="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png"/>
                        <img height="90px" width="80px"src="http://www.islamzatary.com/wp-content/uploads/2014/10/html5-css3-js.png"/>
                        <img height="100px" width="130px" src="https://i.imgur.com/7bxEQre.png"/>
                        <img height="120px" width="100px" src="https://i.imgur.com/K1rotiM.png"/>
                        <img height="90px" width="80px" src="https://i.imgur.com/mSd94EW.png"/>
                        <img height="120px" width="90px" src="https://i.imgur.com/8UqOZz1.png"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
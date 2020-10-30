import React from 'react'
import { NavLink } from 'react-router-dom'
import { BottomNavigation, Link, CardContent } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: 'black',
        justifyContent: "space-between",
        height: "150px",
        
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 190px',
        padding: "15px",
        color: "white",
        textDecoration: "None"

    },
    logos: {
        top: "35px",
        height: "100px"
    },

    footHead: {
        color: "grey",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        minWidth: "120px"
    },

    alignGithubLogo: {
        display: "flex",
        justifyContent: "center",
        marginTop: "15px"
    },

    alignGithub: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10px",
    },

    alignCenterLogo: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        paddingTop: "5px",
        color: "white",
        minWidth: "140px"
    },
    sideGataltic: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: "5px",
        color: "white"
    },

    color: {
        color: "white",
        "&:hover": {
            color: 'red'
        }
    },
    githubRed: {
        color: "white",
        "&:hover": {
            color: 'red'
        }
    },
    style: {
        textDecoration: "none",
    }


})

const Footer = () => {
    const classes = useStyles()


    return (
        <>
        <div className={classes.root}>
            <div className={classes.links}>
                <div className={classes.footHead}>
                    <h3>Source Code</h3>
                </div>
                
                <div className={classes.alignGithubLogo}>
                    <Link href='https://github.com/jlgranof/Galactic-Brite'>
                        <div className={classes.githubRed}>
                            <GitHubIcon className={classes.githubRed} />
                        </div>
                     </Link>
                    
                </div>
                <div className={classes.sideGataltic}>
                    <h5>Galatic Brite</h5>
                </div>
            </div>
            <div className={classes.alignCenterLogo}>
                <img className='rebel-logo' src='https://i.imgur.com/ljlGd8p.png' />
                Galatic Brite 2020 ©
            </div>
            <div className={classes.links}>
                <div className={classes.footHead}>
                    <h3>Follow</h3>
                </div>
                
                <div className={classes.alignGithub}>
                    <Link  style={{textDecoration: "none"}} href='https://github.com/jlgranof'>
                        <div className={classes.color}>
                            Jeff Granof    
                        </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} href='https://github.com/whitejamesthe2nd'>
                        <div className={classes.color}>
                            James White
                        </div>
                        </Link>
                        <Link style={{ textDecoration: "none" }} href='https://github.com/alecbrando'>
                        <div className={classes.color}>
                            Alec Garcia
                        </div>
                    </Link>
                        <Link style={{ textDecoration: "none" }} href='https://github.com/Kmcgee92'>
                        <div className={classes.color}>
                            Kasey McGee
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer


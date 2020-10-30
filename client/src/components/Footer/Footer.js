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
        height: "150px"
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 190px',
        padding: "15px",
        color: "white"
    },
    logos: {
        top: "35px",
        height: "100px"
    },

    footHead: {
        color: "grey",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
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
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "5px",
        color: "white"
    },
    sideGataltic: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: "5px",
        color: "white"
    },

})

const Footer = () => {
    const classes = useStyles()


    return (
        <>
        <BottomNavigation className={classes.root}>
            <div className={classes.links}>
                <div className={classes.footHead}>
                    <h3>Source Code</h3>
                </div>
                
                <div className={classes.alignGithubLogo}>
                    <Link href='https://github.com/jlgranof/Galactic-Brite'><GitHubIcon /></Link>
                    
                </div>
                <div className={classes.sideGataltic}>
                    <h5>Galatic Brite</h5>
                </div>
            </div>
            <div className={classes.alignCenterLogo}>
                <img className='rebel-logo' src='https://i.imgur.com/1Mx9czp.jpg' />
                Galatic Brite 2020 ©
            </div>
            <div className={classes.links}>
                <div className={classes.footHead}>
                    <h3>Follow</h3>
                </div>
                
                <div className={classes.alignGithub}>
                    <Link href='https://github.com/jlgranof'>Jeff Granof</Link>
                    <Link href='https://github.com/whitejamesthe2nd'>James White</Link>
                    <Link href='https://github.com/alecbrando'>Alec Garcia</Link>
                    <Link href='https://github.com/Kmcgee92'>Kasee McGee</Link>
                </div>
            </div>
        </BottomNavigation>
        </>
    )
}

export default Footer


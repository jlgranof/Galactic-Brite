import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
// import { Button } from './Button';
// core components
import HeaderLogo from './HeaderLogo'
import RightHeaderLinks from './RightHeaderLinks';

//redux
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/authActions'


// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';






const useStyles = makeStyles({
    headerCenter: {
        zIndex: 1000,
        backgroundColor: "white",
        position: "absolute",
        left: "50%",
        marginLeft: "-50px",
        width: "140px",
        height: "220px",
        clipPath: "polygon(0% 0%, 99% 0%, 100% 100%, 71% 81%, 65% 63%, 49% 52%, 35% 61%, 27% 81%, 0 100%)"
    },

    // header: {
    //     zIndex: 100,
    //     position: "absolute",
    //     display: "flex",
    //     flexDirection: "row-reverse",
    //     color: "white",
    //     top: "0",
    //     background: "rgb(105,0,0)",
    //     background: "linear-gradient(90deg, rgba(105,0,0,1) 21%, rgba(0,0,0,1) 54%, rgba(105,0,0,1) 72%)",
    //     borderTop: "50px solid rgba(0,0,0,1)",
    //     borderLeft: "85px solid transparent",
    //     borderRight: "85px solid transparent",
    //     left: "20%",
    //     width: "60%",
    //     clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)"
    //     // boxShadow: "1px 1px 1px 1px red"
    // },

    header : {
        zIndex: 101,
        color: "white",

        position: "absolute",
        background: "rgb(70,18,18)",
        background: "linear-gradient(90deg, rgba(70,18,18,1) 0%, rgba(131,2,2,1) 61%, rgba(0,0,0,1) 92%)",
        height: "50px",
        left: "17%",
        width: "70%",
        // border: "solid 1.5em rgba(#000, .2)",
        // border: "2px solid red",
        clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",

        top: "0",
        borderTop: "50px solid rgba(0,0,0,.9)",
        borderLeft: "85px solid transparent",
        borderRight: "85px solid transparent",
        left: "20%",
        width: "60%",

    },

    trapezoid : {
        position: "absolute",
        zIndex: 200, 
        borderTop: "50px solid white",
        borderLeft: "85px solid transparent",
        borderRight: "85px solid transparent",
        height: "0",
        left: "36.5%",

        width: "30%",

    },
    
    inherit: {
        textDecoration: "none",
        position: "absolute",
        zIndex: 200,
        color: "white",
        height: "30px",
        top: "40px",
        right: "10px",
        margin: "5px"
    },
    navMenu: {
        position: "absolute",
        backgroundColor: "rgba(30,30,30, 1)",
        borderRadius: "5px",
        zIndex: 100,
        top: "85px",
        right: 0,
        width: "250px",
        height: "auto",
        boxShadow: "0 0 3px 0 grey"
    },
    navMenuLinks: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 100,
        color: "white",
        listStyle: "none",
    },

    headerWrapper: {
        position: "absolute",
        width: "40vw",
        left: "30%",
    },

    headerButton: {
        position: "relative",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between"
    },

    navItem: {
        textDecoration: "none",
        color: "white",
        width: "100%",
        "&:hover": {
            backgroundColor: "rgba(80, 80, 80, 1)",
            borderRadius: "5px",
        }
    },
    customSize: {
        alignItems: "flex-end",
        bottom: 0
    }
})

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [expanded, setExpanded] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setExpanded(false);
        } else {
            setExpanded(false);
        }
    };

    useEffect(() => {
        return setExpanded(false)
    }, [])

    const handleLogout = () => {
        setExpanded(false)
        dispatch(logout())
        history.push('/')
    }



    return (
        <>
            <div className={classes.headerCenter}>
                <NavLink to="/" activeclass="active">
                    <HeaderLogo />
                </NavLink>
            </div>
            <div className={classes.headerWrapper}>
            <div className={classes.headerButton}>
            <div className={classes.header}>
            
            </div>
            <RightHeaderLinks
                    inherit={classes.inherit}
                    expanded={expanded}
                    setExpanded={setExpanded}/>
            </div>
            </div>
            
            
                

            <nav className="navbar">
                <div>
                    <Collapse
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        in={expanded}
                        timeout="auto"
                        unmountOnExit
                    >
                        <nav className={classes.navMenu}>
                            <div className={classes.navMenuLinks}>
                                <Button onClick={() => history.push('/dashboard')} className={classNames(classes.navItem, classes.customSize)}>
                                    Dashboard
                                </Button>

                                <Button onClick={() => history.push('/about')} className={classNames(classes.navItem, classes.customSize)}>
                                    About
                                </Button>
                                <div>
                                    <Button
                                        className={classNames(classes.navItem, classes.customSize)}
                                        onClick={handleLogout}
                                    >
                                        <i>
                                            sign out
                                    </i>
                                    </Button>
                                </div>
                            </div>
                        </nav>
                    </Collapse>
                </div>
            </nav>
        </>
    );
};

export default Header;
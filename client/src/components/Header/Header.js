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




//redux
import { useSelector } from 'react-redux'

// Core Components
import LoginDialog from '../LoginComponent/LoginDialog'
import SignupDialog from '../SignupComponent/SignupDialog'


import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';






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
    headerWrapper: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
    },
    header : {
        zIndex: 101,
        color: "white",
        position: "absolute",
        background: "rgb(70,18,18)",
        background: "linear-gradient(90deg, rgba(70,18,18,1) 0%, rgba(131,2,2,1) 61%, rgba(0,0,0,1) 92%)",
        height: "60px",
        width: "50%",
        clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
        
    },
    absoluteBlock: {
        display: "absolute",
        width: "60%",
        margin: "0 auto",
    },
    flexMain: {
        display: "flex",
        flexDirection: "row-reverse",
        // backgroundColor: "white"
    },
    flexItemsRight: {
        display: "flex",
        alignItems: "center",
    },
    flexItemsLeft: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
    },
    navMenu: {
        zIndex: 1000,
        position: "absolute",
        right: "20%",
        backgroundColor: "white"
    },
    cutButton: {
        padding: "0 14px",
        clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
    }

    // headerButton: {
    //     position: "relative",
    //     zIndex: 100,
    //     display: "flex",
    //     justifyContent: "space-between"
    // },

    // navItem: {
    //     textDecoration: "none",
    //     color: "white",
    //     width: "100%",
    //     "&:hover": {
    //         backgroundColor: "rgba(80, 80, 80, 1)",
    //         borderRadius: "5px",
    //     }
    // },
    
})

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [expanded, setExpanded] = useState(false);
    const user = useSelector(state => state.auth)
    const id = useSelector((state) => state.auth.id)

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
                <div className={classes.header}>
                    <div className={classes.absoluteBlock}>
                        <div className={classes.flexMain}>
                            <div className={classes.flexItemsLeft}>
                                <button 
                                className={classes.cutButton}
                                onClick={handleLogout}>
                                    temp signout
                                </button>
                            </div>
                            <div className={classes.flexItemsRight}>
                                <RightHeaderLinks 
                                expanded={expanded}
                                setExpanded={setExpanded}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            
            
                

            <nav className="navbar">
                <div>
                    <Collapse
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        in={expanded}
                        // in={true}
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
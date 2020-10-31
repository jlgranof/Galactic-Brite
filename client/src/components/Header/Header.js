import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
// import { Button } from './Button';
// core components
import HeaderLogo from './HeaderLogo'
import RightHeaderLinks from './RightHeaderLinks';
//redux
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/actions/authActions'
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
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';

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
    header: {
        zIndex: 101,
        color: "white",
        position: "absolute",
        height: "60px",
        width: "51%",
        borderTop: "50px solid rgb(70,18,18)",
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
    },
    flexMain: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%"
        // backgroundColor: "green",
    },
    flexItemsRight: {
        zIndex: 102,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        // right: "150px",
        // margin: "10px",
        width: "50%",
        height: "60px"
    },
    flexItemsLeft: {
        zIndex: 102,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        // right: "150px",
        // margin: "10px",
        width: "50%",
        height: "60px"
    },
    navMenu: {
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        height: "150px",
        width: "150px",
        right: "25%",
        top: "6.5%",
        boxShadow: "1px 1px 10px 1px rgb(40,40,40)",
        borderRadius: "10px",
        background: "linear-gradient(0deg, rgba(30, 30, 30, 1) 0%, rgba(75, 73, 73, 1) 50%, rgba(30, 30, 30, 1) 100%)"
    },
    navMenuLinks: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    navItem: {
        color: "grey",
        fontWeight: "bold",
        "&:hover": {
            color: "white",
            borderRadius: "10px",

            // backgroundColor: "rgba(220,220,220, .2)",
            transform: "scale(1.1)"
        }
    },
    customSize: {
        display: "flex",
        justifyContent: "center",
    },
    cutLog: {
        position: "absolute",
        background: "white",
        height: "70%",
        right: "34.4vw",
        width: "150px",
        top: "33%",
        clipPath: "polygon(14% 0, 100% 0, 86% 100%, 0 100%);",
    },
    cutSign: {
        position: "absolute",
        background: "white",
        top: "33%",
        right: "26.5vw",
        height: "40px",
        width: "150px",
        clipPath: "polygon(14% 0, 100% 0, 86% 100%, 0 100%);",
    },
    alignPlus: {
        position: "absolute",
        background: "white",
        top: "33%",
        left: "34.4vw",
        height: "70%",
        width: "150px",

        clipPath: "polygon(0% 0, 90% 0, 100% 100%, 11% 100%);"
    },
    storePlus: {
        position: "absolute",
        background: "white",
        top: "33%",
        left: "26.5vw",
        height: "70%",
        width: "9rem",
        clipPath: "polygon(0% 0, 90% 0, 100% 100%, 13% 100%);"
    },
    roundIcon: {
        color: "white",
        width: "40px",
        opacity: .8,
        "&:hover": {
            opacity: 1,
            transform: "scale(1.08)"
        }
    },
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
                <div className={classes.header}/>
                    <div className={classes.flexMain}>
                        <div className={classes.flexItemsLeft}>
                            <Button variant="contained" className={classNames(classes.alignPlus)} onClick={() => history.push('/create-event')} activeclass="active">
                                Make Event
                            </Button>
                        <Button variant="contained" className={classNames(classes.storePlus)} onClick={()=> history.push('/store')}activeclass="active">
                            Store
                            </Button>
                        </div>
                        <div className={classes.flexItemsRight}>
                            <RightHeaderLinks
                            cutLog={classes.cutLog}
                            cutSign={classes.cutSign}
                            expanded={expanded}
                            setExpanded={setExpanded}
                        />
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
                                <Button
                                onClick={() => history.push('/dashboard')}
                                className={classNames(classes.navItem)}>
                                    <DashboardIcon/>
                                    Dashboard
                                </Button>
                                <Button
                                onClick={() => history.push('/aboutUs')}
                                className={classNames(classes.navItem)}>
                                    <PersonOutlineIcon/>
                                    About
                                </Button>
                                <Button
                                    className={classNames(classes.navItem, classes.customSize)}
                                    onClick={handleLogout}
                                >
                                        sign out
                                </Button>
                            </div>
                        </nav>
                    </Collapse>
                </div>
            </nav>
        </>
    );
};

export default Header;

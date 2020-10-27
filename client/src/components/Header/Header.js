import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

// core components
import HeaderLogo from './HeaderLogo'
import LeftHeaderLinks from './LeftHeaderLinks';
import RightHeaderLinks from './RightHeaderLinks';

//redux
import {useDispatch} from 'react-redux'
import {logout} from '../../actions/authActions'


// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';






const useStyles = makeStyles({
    headerBar: {
        width: "100%",
    },
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
    leftHeader: {
        zIndex: 1,
        position: "absolute",
        right: "50%",
        paddingRight: "100px",
        width: "50%",
        display: "flex",
        opacity: "1",
        color: "white",
        backgroundColor: "rgba(0,0,0,.8)",

    },
    rightHeader: {
        zIndex: 1,
        position: "absolute",
        left: "50%",
        paddingLeft: "150px",
        width: "50%",
        display: "flex",
        flexDirection: "row-reverse",
        opacity: "1",
        color: "white",
        backgroundColor: "rgba(0,0,0,.8)",
    },
    inherit: {
        textDecoration: "none",
        color: "white"
    },
    navMenu: {
        position: "absolute",
        backgroundColor: "rgba(30,30,30, 1)",
        borderRadius: "10px",
        zIndex: 100,
        top: "90px",
        right: 20,
        width: "200px",
        height: "auto",
        boxShadow: "0 0 3px 0 grey"
    },
    navMenuLinks: {
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        zIndex: 100,
        color: "white",
        listStyle: "none",
    },
    navItem: {
        color: "white",
        width: "100%",
        "&:hover": {
            backgroundColor: "rgba(80, 80, 80, 1)",
            
        }
    },
    signout: {
        alignItems:"flex-end", 
        bottom: 0
    }
})

const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {

        return setExpanded(false)
    },[])

    const handleLogout = () => {
        setExpanded(false)
        dispatch(logout())
        history.push('/')
    }
    return (
        <>
        <div className={classes.headerCenter}>
            <div>
            </div>
            <HeaderLogo/>
        </div>
        <div className={classes.bar}>
            <div className={classes.leftHeader}>
                <LeftHeaderLinks inherit={classes.inherit}/>
            </div>
            <div className={classes.rightHeader}>
                <RightHeaderLinks 
                inherit={classes.inherit}
                expanded={expanded}
                setExpanded={setExpanded}
                />
            </div>
        </div>
        <nav>
            <div>
                <Collapse 
                    in={expanded}  
                    timeout="auto" 
                    unmountOnExit
                >
                    <nav className={classes.navMenu}>
                        <ul className={classes.navMenuLinks}>
                            <li className={classes.navItem}>
                                hello
                            </li>
                            <li className={classes.navItem}>
                                hello
                            </li>
                            <div className={classes.navItem}>
                                <Button 
                                className={classNames(classes.navItem, classes.signout)}
                                onClick={handleLogout}
                                >
                                    <i>
                                        sign out
                                    </i>
                                </Button>
                            </div>
                        </ul>
                    </nav>
                </Collapse>
            </div>
        </nav>
        </>
    );
};

export default Header;
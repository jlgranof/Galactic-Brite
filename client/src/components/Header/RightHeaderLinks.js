import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux'

// Core Components
import LoginDialog from '../LoginComponent/LoginDialog'
import SignupDialog from '../SignupComponent/SignupDialog'


// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
    rightLinkBox: {
        display: "flex",
        flexDirection: "row",
    },
    roundIcon: {
        color: "white",
        width: "40px",
        height: "40px",
        opacity: .8,
        "&:hover": {
            opacity: 1,
            transform: "scale(1.08)"
        }
    },
    alignPlus: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
        top: "0",
        textDecoration: "None",
        color: "white",
        margin: "10px"
    },
    avatar: {
        margin: "15px",
        height: "50px",
        width: "50px",
        "&:hover": {
            opacity: 1,
            transform: "scale(1.03)"
        },
    },
})


const RightHeaderLinks = ({ inherit, expanded, setExpanded }) => {
    const classes = useStyles()
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isSignupOpen, setIsSignupOpen] = useState(false)
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



    return (
        <div>
            {id === undefined ?

                <>
                    <div>
                        {/* <NavLink className={classNames(classes.alignPlus)} to="/create-event" activeclass="active">
                            <AddCircleIcon className={classes.roundIcon} />
                            Create Event
                        </NavLink> */}

                        <button onClick={()=>setIsLoginOpen(true)}>
                            Login
                        </button>

                        
                        <LoginDialog
                        isLoginOpen={isLoginOpen}
                        setIsLoginOpen={setIsLoginOpen}
                        setIsSignupOpen={setIsSignupOpen}
                        />
                        
                        <button onClick={() => setIsSignupOpen(true)}>
                            Signup
                        </button>
                        


                        <SignupDialog
                        isOpen={isSignupOpen}
                        setIsOpen={setIsSignupOpen}
                        />
                    </div>
                </>
            : null }
                {id !== undefined ?
                    <>
                        <NavLink className={classNames(inherit, classes.alignPlus)} to="/create-event" activeclass="active">
                            <AddCircleIcon className={classes.roundIcon} />
                                Create Event
                        </NavLink>

                        <div>
                        </div>
                        <IconButton
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <Avatar alt={user.username} src={user.avatar_url} className={classes.avatar} />
                        </IconButton>
                    </>
                    : null}
            </div>
    );
};

export default RightHeaderLinks;

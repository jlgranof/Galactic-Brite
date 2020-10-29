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
    // rightLinkBox: {
    //     display: "flex",
    //     flexDirection: "row",
    // },
    // roundIcon: {
    //     color: "white",
    //     width: "40px",
    //     height: "40px",
    //     opacity: .8,
    //     "&:hover": {
    //         opacity: 1,
    //         transform: "scale(1.08)"
    //     }
    // },

})
const RightHeaderLinks = ({ expanded, setExpanded, cutLog, cutSign }) => {
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
        <>
            {id === undefined ?
                <>
                    
                    <Button className={cutLog} variant="contained" onClick={() => setIsLoginOpen(true)}>
                    Login
                    </Button>
                    
                    <LoginDialog
                        isLoginOpen={isLoginOpen}
                        setIsLoginOpen={setIsLoginOpen}
                        setIsSignupOpen={setIsSignupOpen}
                    />
                    <Button className={cutSign} variant="contained" onClick={() => setIsSignupOpen(true)}>
                        Signup
                                </Button>
                    <SignupDialog
                        isOpen={isSignupOpen}
                        setIsOpen={setIsSignupOpen}
                    />
                </>
                : null}
            {id !== undefined ?
                    <div>
                        <Button alt={user.username} onMouseEnter={onMouseEnter} variant="contained" onMouseLeave={onMouseLeave} src={user.avatar_url} className={cutSign}>Profile</Button>
                    </div>

                : null}
        </>
    );
};
export default RightHeaderLinks;
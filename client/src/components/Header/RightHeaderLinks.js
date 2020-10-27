import React, {useState} from 'react';
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
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

// @material-ui/icons
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles({
    rightLinkBox: {
        padding: "30px",
    },
    roundIcon: {
        color: "white",
        width: "40px",
        height: "40px",
        opacity: .8,
        "&:hover": {
            opacity: 1,
            transform: "scale(1.2)"
        }
    },
    alignPlus: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        padding: "10px"
    },
    avatar: {
        height: "60px",
        width: "60px",
    }

})


const RightHeaderLinks = ({inherit}) => {
    const classes = useStyles()
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const user = useSelector(state => state.auth)
    console.log(user)
    const id = useSelector((state) => state.auth.id)
    console.log(id)
    return (
        <>
            <div className={classes.rightLinkBox}>
                        {id === undefined ?
                            <>
                                <Button className={inherit} onClick={()=>setIsLoginOpen(true)}>
                                    Login
                                </Button>
                                <LoginDialog
                                isLoginOpen={isLoginOpen}
                                setIsLoginOpen={setIsLoginOpen}
                                setIsSignupOpen={setIsSignupOpen}
                                />
                                <Button className={inherit} onClick={() => setIsSignupOpen(true)}>
                                    Signup
                                </Button>
                                <Button className={inherit} to="/create-event" activeclass="active">
                                    <NavLink className={inherit} to="/create-event" activeclass="active">+</NavLink>
                                </Button>
                                <SignupDialog
                                isOpen={isSignupOpen}
                                setIsOpen={setIsSignupOpen}
                                />
                            </>
                        : null }
                        {id !== undefined ?
                            <>
                            <NavLink className={classNames(inherit, classes.alignPlus)} to="/create-event" activeclass="active">
                                    <AddCircleIcon className={classes.roundIcon}/>
                                    Create Event
                            </NavLink>
                            <Avatar alt={user.username} src={user.avatar_url} className={classes.avatar}/>
                            </>
                        : null }

            </div>
        </>
    );
};

export default RightHeaderLinks;

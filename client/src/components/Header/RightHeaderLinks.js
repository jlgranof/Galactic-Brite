import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';


// Core Components
import LoginDialog from '../LoginComponent/LoginDialog'
import SignupDialog from '../SignupComponent/SignupDialog'


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    leftLinkBox: {
        padding: "30px",
    },
})


const RightHeaderLinks = ({inherit}) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const classes = useStyles()
    return (
        <>
            <div className={classes.leftLinkBox}>
                    <Button>
                        <NavLink className={inherit} to="/" activeclass="active">Home</NavLink>
                    </Button>

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

            </div>
        </>
    );
};

export default RightHeaderLinks;

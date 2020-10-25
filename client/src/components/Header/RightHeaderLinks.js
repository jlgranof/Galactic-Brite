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


const RightHeaderLinks = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(true)
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const classes = useStyles()
    return (
        <>
            <div className={classes.leftLinkBox}>
                    <Button>
                        <NavLink to="/" activeclass="active">Home</NavLink>
                    </Button>

                    <Button onClick={()=>setIsLoginOpen(true)}>
                        Login
                    </Button>
                    <LoginDialog 
                    isOpen={isLoginOpen} 
                    setIsOpen={setIsLoginOpen}
                    />
                    <Button onClick={() => setIsSignupOpen(true)}>
                        Signup
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
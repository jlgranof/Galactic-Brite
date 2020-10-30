import React, {useState} from 'react';

// redux
import { useDispatch } from 'react-redux'
import {login} from '../../Redux/actions/authActions'

// Core Components
import LoginModal from '../LoginComponent/LoginModal'
import { DialogContent } from '../ModalStyles/ModalStyles';
import { DialogTitle } from '../ModalStyles/ModalStyles';
import { DialogActions } from '../ModalStyles/ModalStyles';

// @material-ui/core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    footer: {
        display: "flex",
        justifyContent: "space-between",
    }
})

const LoginDialog = ({isLoginOpen, setIsLoginOpen, setIsSignupOpen}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if (email != "" && password != ""){
            dispatch(login(email, password))
            setIsLoginOpen(false)

        }
    }
    const handleDemo = () => {
        
        dispatch(login("therealsithleader@gungan.com", "password"))
        setIsLoginOpen(false)
    }
    const transitionToSignup = () => {
        setIsLoginOpen(false)
        setIsSignupOpen(true)
    }
    return (
        <Dialog
            open={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
        >
            <DialogTitle
                id="login"
            >
                Login
            </DialogTitle>
            <DialogContent dividers>
                <LoginModal 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                />
            </DialogContent>
                <div className={classes.footer}>
                <Button
                    autoFocus
                    onClick={handleLogin}
                    style={{ color: "red" }}>
                    login
                </Button>

                <Button
                    autoFocus
                    onClick={handleDemo}
                    style={{color: "red"}}
                >
                    demo
                </Button>
                <div>
                    <i>don't have an </i> 
                    <i>account?</i>
                    <Button
                        onClick={transitionToSignup}
                        style={{ color: "red" }}
                        >
                    <i>Signup</i>
                    </Button>

                </div>
                </div>

        </Dialog>
    );
};

export default LoginDialog;
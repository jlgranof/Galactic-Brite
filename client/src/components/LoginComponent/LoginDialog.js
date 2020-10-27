import React, {useState} from 'react';

// redux
import { useDispatch } from 'react-redux'
import {login} from '../../actions/authActions'

// Core Components
import LoginModal from '../LoginComponent/LoginModal'
import { DialogContent } from '../ModalStyles/ModalStyles';
import { DialogTitle } from '../ModalStyles/ModalStyles';
import { DialogActions } from '../ModalStyles/ModalStyles';

// @material-ui/core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


const LoginDialog = ({isLoginOpen, setIsLoginOpen, setIsSignupOpen}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("therealsithleader@gungan.com")
    const [password, setPassword] = useState("password")

    const handleLogin = async () => {
        console.log(email)
        console.log(password)
        await dispatch(login(email, password))
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
                <Button
                    autoFocus
                    onClick={handleLogin}
                    color="primary">
                    login
                </Button>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={handleLogin}
                    color="primary">
                    demo
                </Button>
                <Button
                    onClick={() => setIsLoginOpen(false)}
                    color="secondary"
                    >
                </Button>
                    <i>don't have an</i> 
                    <i>account?</i>
                    <Button
                        onClick={transitionToSignup}
                        color="secondary"
                        >
                    <i>Signup</i>
                    </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;
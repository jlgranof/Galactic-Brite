import React from 'react';

// Core Components
import LoginModal from '../LoginComponent/LoginModal'
import { DialogContent } from '../ModalStyles/ModalStyles';
import { DialogTitle } from '../ModalStyles/ModalStyles';
import { DialogActions } from '../ModalStyles/ModalStyles';

// @material-ui/core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


const LoginDialog = ({isLoginOpen, setIsLoginOpen}) => {

    const transitionToSignup = () => {
        console.log("hello")
    }
    return (
        <Dialog
            open={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
        >
            <DialogTitle
                id="login"
                onClose={() => setIsLoginOpen(false)}>
                Login
            </DialogTitle>
            <DialogContent dividers>
                <LoginModal />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={() => setIsLoginOpen(false)}
                    color="primary">
                    login
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
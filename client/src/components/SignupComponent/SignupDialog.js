import React from 'react';

// Core Components
import SignupModal from '../SignupComponent/SignupModal'
import { DialogContent } from '../ModalStyles/ModalStyles';
import { DialogTitle } from '../ModalStyles/ModalStyles';
import { DialogActions } from '../ModalStyles/ModalStyles';

// @material-ui/core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const SignupPage = ({isOpen, setIsOpen, setIsLoginOpen, setIsSignupOpen}) => {

    const transitionToLogin = () => {
        setIsLoginOpen(true)
        setIsSignupOpen(false)
    }
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <DialogTitle
                id="signup"
                onClose={() => setIsOpen(false)}>
                Sign up
            </DialogTitle>
            <DialogContent dividers>
                <SignupModal />
            </DialogContent>
                <Button
                    autoFocus
                    onClick={() => setIsOpen(false)}
                    style={{ color: "red" }}>
                    create an account
                </Button>
                <Button
                        onClick={transitionToLogin}
                        color="secondary"
                        >
                    <i>back to Login</i>
                </Button>
        </Dialog>
    );
};

export default SignupPage;
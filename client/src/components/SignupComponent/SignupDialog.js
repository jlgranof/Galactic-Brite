import React from 'react';

// Core Components
import SignupModal from '../SignupComponent/SignupModal'
import { DialogContent } from '../ModalStyles/ModalStyles';
import { DialogTitle } from '../ModalStyles/ModalStyles';
import { DialogActions } from '../ModalStyles/ModalStyles';

// @material-ui/core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const SignupPage = ({isOpen, setIsOpen}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <DialogTitle
                id="login"
                onClose={() => setIsOpen(false)}>
                Sign up
            </DialogTitle>
            <DialogContent dividers>
                <SignupModal />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={() => setIsOpen(false)}
                    color="primary">
                    sign up
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SignupPage;
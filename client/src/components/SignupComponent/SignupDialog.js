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
                    color="primary">
                    create an account
                </Button>
        </Dialog>
    );
};

export default SignupPage;
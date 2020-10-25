import React from 'react';

// Core Components
import LoginModal from '../LoginComponent/LoginModal'
import { DialogContent } from '../ModalStyles/ModalStyles';
import { DialogTitle } from '../ModalStyles/ModalStyles';
import { DialogActions } from '../ModalStyles/ModalStyles';

// @material-ui/core
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


const LoginDialog = ({isOpen, setIsOpen}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <DialogTitle
                id="login"
                onClose={() => setIsOpen(false)}>
                Login
            </DialogTitle>
            <DialogContent dividers>
                <LoginModal />
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={() => setIsOpen(false)}
                    color="primary">
                    login
                </Button>
            </DialogActions>
            <DialogActions>
                <Button
                    onClick={() => setIsOpen(false)}
                    color="black">
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;
import React, { useState, useEffect  } from 'react';
import Cookie from "js-cookie"


//redux
import { useSelector} from 'react-redux'
// Core Components
import LoginDialog from '../LoginComponent/LoginDialog'
import SignupDialog from '../SignupComponent/SignupDialog'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    
})
const RightHeaderLinks = ({ expanded, setExpanded, cutLog, cutSign }) => {
    const sessionCookie = Cookie.get("userActive")
    console.log(sessionCookie)

    const classes = useStyles()
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const user = useSelector(state => state.auth)
    const id = useSelector((state) => state.auth.id)
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setExpanded(false);
        } else {
            setExpanded(false);
        }
    };
    const render = () => {
        return (
            <>
                <Button
                className={cutLog}
                variant="contained"
                onClick={() => setIsLoginOpen(true)}
                >
                Login
                </Button>

                <LoginDialog
                isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen}
                />
                <Button
                className={cutSign}
                variant="contained"
                onClick={() => setIsSignupOpen(true)}
                >
                Signup
                </Button>
                <SignupDialog
                isOpen={isSignupOpen}
                setIsOpen={setIsSignupOpen}
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen}
                />
            </>
        );
    }
    
    return (
        <>
            {id !== undefined ?
                    <div>
                        <Button alt={user.username} onMouseEnter={onMouseEnter} variant="contained" onMouseLeave={onMouseLeave} src={user.avatar_url} className={cutSign}>Profile</Button>
                    </div>

                : null}
            {!sessionCookie && render()}
                
        </>
    );
};
export default RightHeaderLinks;
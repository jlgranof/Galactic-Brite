import React, {useState} from 'react';

// core components

import CustomInput from '../SupportComponents/CustomInput'


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockIcon from '@material-ui/icons/Lock';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';



// nodejs library that concatenates classes
import classNames from "classnames";



const useStyles = makeStyles({

    inputGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 6fr 1fr",
        gridTemplateRows: "3fr 20fr 10fr"

    },
    inputs: {
        gridColumn: "2/3",
        gridRow: "2/3",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        margin: "10px",
    },
    inputIconsColor: {
        color: "white",
    },
    input: {
        margin: "-10px",
        borderRadius: "5px",
        opacity: 1,
        backgroundColor: "rgba(40, 40, 40, .2)",
        border: "1px solid white",
        "&:hover": {
        },
    }

})

const LoginComponent = () => {
    const classes = useStyles()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const checkPassword = () => {
        
    }


    return (
        <>
            <div className={classes.LoginCard}>
                <div className={classNames(classes.centerContent, classes.inputGrid)}>
                    <div className={classes.inputs}>
                        <CustomInput
                            inputValue={username}
                            setStateFunc={setUsername}
                            labelText="username..."
                            id="username"
                            inputProps={{
                                type: "text",
                                endAdornment: (
                                    <InputAdornment>
                                        <Icon className={classes.inputIconsColor}>
                                            <PeopleAltIcon/>
                                        </Icon>
                                    </InputAdornment>
                                ),
                                className: classes.input
                            }}
                        />
                        <CustomInput
                            inputValue={email}
                            setStateFunc={setEmail}
                            labelText="Email..."
                            id="email"
                            inputProps={{
                                type: "text",
                                endAdornment: (
                                    <InputAdornment>
                                        <Icon className={classes.inputIconsColor}>
                                            <Email/>
                                        </Icon>
                                    </InputAdornment>
                                ),
                                className: classes.input
                            
                            }}
                        />
                        <CustomInput
                            inputValue={password}
                            setStateFunc={setPassword}
                            labelText="password"
                            id="password"
                            inputProps={{
                                type: "text",
                                endAdornment: (
                                    <InputAdornment>
                                        <Icon className={classes.inputIconsColor}>
                                            <LockIcon/>
                                        </Icon>
                                    </InputAdornment>
                                ),
                                className: classes.input
                            }}
                        />
                        <CustomInput
                            inputValue={confirmPassword}
                            setStateFunc={setConfirmPassword}
                            labelText="confirm password"
                            id="confirmPassword"
                            inputProps={{
                                type: "text",
                                endAdornment: (
                                    <InputAdornment>
                                        <Icon className={classes.inputIconsColor}>
                                            <LockIcon/>
                                        </Icon>
                                    </InputAdornment>
                                ),
                                className: classes.input
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginComponent;

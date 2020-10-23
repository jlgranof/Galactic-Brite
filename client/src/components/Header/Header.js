import React from 'react';

// core components
import HeaderLogo from './HeaderLogo'
import LeftHeaderLinks from './LeftHeaderLinks';
import RightHeaderLinks from './RightHeaderLinks';



// // nodejs library that concatenates classes
// import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles({
    header: {
        zIndex: 1,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        opacity: ".8",
        color: "white",
        backgroundColor: "white",
    },
})

const Header = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.header}>
                <LeftHeaderLinks/>
                <Toolbar>
                <HeaderLogo/>
                </Toolbar>
                <RightHeaderLinks/>
            </div>
        </div>
    );
};

export default Header;
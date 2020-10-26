import React from 'react';

// core components
import HeaderLogo from './HeaderLogo'
import LeftHeaderLinks from './LeftHeaderLinks';
import RightHeaderLinks from './RightHeaderLinks';



// nodejs library that concatenates classes
// import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';





const useStyles = makeStyles({
    headerBar: {
        width: "100%",
    },
    headerCenter: {
        zIndex: 1000,
        backgroundColor: "white",
        position: "absolute",
        left: "50%",
        marginLeft: "-50px",
        width: "140px",
        height: "220px",
        clipPath: "polygon(0% 0%, 99% 0%, 100% 100%, 71% 81%, 65% 63%, 49% 52%, 35% 61%, 27% 81%, 0 100%)"
    },
    leftHeader: {
        zIndex: 1,
        position: "absolute",
        right: "50%",
        paddingRight: "100px",
        width: "50%",
        display: "flex",
        opacity: "1",
        color: "white",
        backgroundColor: "rgba(0,0,0,.8)",

    },
    rightHeader: {
        zIndex: 1,
        position: "absolute",
        left: "50%",
        paddingLeft: "150px",
        width: "50%",
        display: "flex",
        flexDirection: "row-reverse",
        opacity: "1",
        color: "white",
        backgroundColor: "rgba(0,0,0,.8)",
    },
    inherit: {
        textDecoration: "none",
        color: "white"
    },
})

const Header = () => {
    const classes = useStyles()
    return (
        <>
        <div className={classes.headerCenter}>
            <div>
            </div>
            <HeaderLogo/>
        </div>
        <div className={classes.bar}>
            <div className={classes.leftHeader}>
                <LeftHeaderLinks inherit={classes.inherit}/>
            </div>
            <div className={classes.rightHeader}>
                <RightHeaderLinks inherit={classes.inherit}/>
            </div>
        </div>
        </>
    );
};

export default Header;
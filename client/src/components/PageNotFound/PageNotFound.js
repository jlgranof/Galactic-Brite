import React, {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom"


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// assets
import bb8 from '../../assets/images/pageNotFound.gif'



const useStyles = makeStyles({
    notFound: {
        display: "flex",
        flexDirection: "row-reverse",
        height: "100vh",
        backgroundColor: "rgb(255, 180, 129)"
    },
    text: {
        position: "absolute",
        top: 200,
        left: 200,
        fontSize: "100px",
    },
    four: {
        position: "absolute",
        top: 100,
        left: 450,
        fontSize: "100px",
    }
})

const PageNotFound = () => {
    const classes = useStyles()

    const [isRedirect, setIsRedirect] = useState(false)

    useEffect(()=> {
        const timer = setTimeout(()=> setIsRedirect(true), 4400)
        return (() => {clearTimeout(timer)})
    },[isRedirect])

    if(isRedirect){
        return <Redirect to="/"/>
    }
    return (
        <>
            <h1 className={classes.four}> 404 </h1>
            <h1 className={classes.text}>
                <div>Page Not Found!</div>
            </h1>
            <div className={classes.notFound}>
                <img src={bb8}/>
            </div>
        </>
    );
};

export default PageNotFound;
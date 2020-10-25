import React from 'react';

// core components
import Header from '../Header/Header'
import CarouselComponent from '../CarouselComponent/CarouselComponent'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    extrasTemporary: {
        zIndex: 100,
        postition: "absolute",
        bottom: "50px",
        height: "200px",
        width: "70%",
        margin: "0 auto",
        backgroundColor: "blue",
    },
})


const LandingPage = () => {
    const classes = useStyles()
    
    return (
        <>
            <Header/>
            <CarouselComponent/>

            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div className={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
        </>
    );
};

export default LandingPage;
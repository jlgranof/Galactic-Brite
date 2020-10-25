import React from 'react';

// core components
import Header from '../Header/Header'
import CarouselComponent from '../CarouselComponent/CarouselComponent'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    extrasTemporary: {
        zIndex: 100,
        height: "200px",
        width: "50%",
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

            <div classeName={classes.extrasTemporary}>
                Featured Events
                <div>
                    Events 
                </div>
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                Events 
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>
            <div>
                About the Site Maybe
            </div>

        </>
    );
};

export default LandingPage;
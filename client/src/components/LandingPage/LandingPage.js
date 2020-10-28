import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

// core components
import Header from '../Header/Header'
import CarouselComponent from '../CarouselComponent/CarouselComponent'
import EventsComponent from '../EventsComponent/EventsComponent'
import FeaturedEventsComponent from '../FeaturedEventsComponent/FeaturedEventsComponent'
import FeaturedCarousel from '../CarouselComponent/FeaturedCarousel'
import SnackBar from '../SnackBar/SnackBar'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// assets
import featuredHeader from '../../assets/images/featuredHeader.jpg'

const useStyles = makeStyles({
    featuredEvents: {
        zIndex: 100,
        postition: "absolute",
        bottom: "50px",
        height: "200px",
        width: "60%",
        margin: "0 auto",
        backgroundColor: "red",
    },
    events: {
        zIndex: 100,
        postition: "absolute",
        bottom: "50px",
        height: "200px",
        width: "60%",
        margin: "0 auto",
        backgroundColor: "blue",
    },
    carousel: {
        display: "fixed",
        backgroundSize: "100% 100%",
        borderRadius: "10px",
        paddingTop:"20px",
        width: "90%",
        margin: "0 auto"  
    },
    header: {

    }
})


const LandingPage = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    //preload featured events
    const featuredEvents = useSelector(state => state.featuredSlice.events)
    // console.log(featuredEvents)
    
    const fakeList = [1, 2, 3, 2, "pulled from database", "random events stuff"]

    return (
        <>
            <Header/>
            {/* <SnackBar/> */}
            <CarouselComponent/>
            <div className={classes.header}>
                Featured Events
            </div>
            <div className={classes.carousel}>
                <FeaturedCarousel/>
            </div>
                {fakeList.map((value, i)=> (
                    <div 
                    key={i}
                    className={classes.events}>
                    <EventsComponent />
                    </div>
                ))}


        </>
    );
};

export default LandingPage;

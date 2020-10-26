import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
// core components
import Header from '../Header/Header'
import CarouselComponent from '../CarouselComponent/CarouselComponent'
import EventsComponent from '../EventsComponent/EventsComponent'
import FeaturedEventsComponent from '../FeaturedEventsComponent/FeaturedEventsComponent'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    featuredEvents: {
        zIndex: 100,
        postition: "absolute",
        bottom: "50px",
        height: "200px",
        width: "80%",
        margin: "0 auto",
        backgroundColor: "red",
    },
    events: {
        zIndex: 100,
        postition: "absolute",
        bottom: "50px",
        height: "200px",
        width: "80%",
        margin: "0 auto",
        backgroundColor: "blue",
    },
})


const LandingPage = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    //preload featured events
    const featuredEvents = useSelector(state => state.featuredSlice.events)
    console.log(featuredEvents)
    
    const fakeList = [1, 2, 3, 2, "pulled from database", "random events stuff"]

    return (
        <>
            <Header/>
            <CarouselComponent/>

                {featuredEvents? featuredEvents.map((event, i)=> (
                        <FeaturedEventsComponent  key={i} event={event}/>
                )):null}
            <div>
                {fakeList.map((value, i)=> (
                    <div 
                    key={i}
                    className={classes.events}>
                    <EventsComponent />
                    </div>
                ))}

            </div>


        </>
    );
};

export default LandingPage;

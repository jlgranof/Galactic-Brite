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
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


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
    featuredHeader: {
        display: "flex",
        margin: "0 100px",
        flexDirection: "row",
        marginTop: "100px",
        fontWeight: "bold",
        fontSize: "40px",
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    spacer: {
        margin: "0 20px",
    },
    gifBar: {
        zIndex: 100,
        left: "10%",
        top: "80vh",
        position: "absolute",
        backgroundColor: "rgba(26, 26, 26, 1)",
        height: "100px",
        width: "80vw",
        clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        background: "rgb(55,27,27)",
        background: "radial-gradient(circle, rgba(55,27,27,1) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)",
        height: "100px",
        clipPath: "polygon(20% 0%, 80% 0, 100% 100%, 0% 100%)",
        
    },
    gifBar2: {
        zIndex: 110,
        top: "85vh",
        position: "absolute",
        borderTop: "2px solid black",
        backgroundColor: "rgba(26, 26, 26, 1)",
        height: "100px",
        width: "100vw",
        height: "55px",
        background: "rgb(55,27,27)",
        background: "radial-gradient(circle, rgba(55,27,27,1) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)",
        
    }
})


const LandingPage = () => {
    const classes = useStyles()

    const events = useSelector(state => state.eventsSlice.events)
    console.log(events)
    
    const fakeList = [1, 2, 3, 2, "pulled from database", "random events stuff"]
    
    // http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote
    return (
        <>
            <Header/>
            {/* <SnackBar/> */}
            <CarouselComponent />
            <div className={classes.gifBar}>
            </div>
            <div className={classes.gifBar2}>
            </div>
            <div className={classes.featuredHeader}>
                <div className={classes.spacer}>
                    Featured Events 
                </div>
                <ArrowForwardIosIcon fontSize={"large"} />
            </div>
            <div className={classes.carousel}>
                <FeaturedCarousel/>
            </div>
                {fakeList.map((value, i)=> (
                    <div 
                    key={i}
                    className={classes.events}>
                    <EventsComponent
                    id={events.host_id}
                    date={events.event_date}
                    description={events.event_description}
                    avatar={events.event_picture_url}
                    planet={events.event_planet}
                    date={events.event_date}
                    date={events.event_date}
                    date={events.event_date}
                    />
                    </div>
                ))}


        </>
    );
};

export default LandingPage;

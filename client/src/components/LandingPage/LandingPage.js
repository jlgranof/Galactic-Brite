import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'



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
        display: "flex",
        flexDirection: "column",
        margin: '0 auto',
        zIndex: 100,
        paddingBottom: "50px",
        marginBottom: "50px",
        width: "70%",
        backgroundColor: "rgba(21, 21, 21, 1)",
        boxShadow: " 1px 1px 100px 10px rgb(70, 18, 11)",
        borderRadius: "20px",
        paddingTop: "80px"
    },
    parent: {
        display: "flex",
        justifyContent: "center",
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
        
    },
})


const LandingPage = () => {
    const classes = useStyles()
    const events = useSelector(state => state.eventsSlice.events)
    
    




    return (
        <>
            <Header/>
            
            {/* <SnackBar/> */}
            <CarouselComponent/>
            
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
            <div className={classes.events}>
                { events ? events.map((event, i)=> (
                    <div 
                    className={classes.parent}
                    key={i}
                    >
                        <EventsComponent
                        id={event.host_id}
                        date={event.event_date}
                        description={event.event_description}
                        avatar={event.event_picture_url}
                        planet={event.event_planet}
                        featured={event.is_featured}
                        eventName={event.name}
                        rtl={i%2==0?true:false}
                        />
                    </div>
                )): null}

            </div>
            


        </>
    );
};

export default LandingPage;

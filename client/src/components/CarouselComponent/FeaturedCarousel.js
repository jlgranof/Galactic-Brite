import React, { useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux'

//core components
import FeaturedEventsComponent from '../FeaturedEventsComponent/FeaturedEventsComponent'

// @material-ui/core
import Carousel from 'react-elastic-carousel'
import { makeStyles } from "@material-ui/core/styles";


//bootstrap
// import './styles.css'

const useStyles = makeStyles({
    indicators: {
        position: "absolute",
        transform: "scale(2) rotate(90deg)",
        width: "100px",
        right: 0,
        padding: 0,
        zIndex: 1000,
        top: "80%",
        boxSizing: "border-box"
    },
})

const FeaturedCarousel = () => {
    const classes = useStyles()
    const [isActive, setIsActive] = useState(1)

    //preload featured events
    const featuredEvents = useSelector(state => state.featuredSlice.events)


    const scroll = () => {
        setIsActive((num) => num + 1)
    }

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]

    return (
        <>
            <Carousel
            breakPoints={breakPoints}
            >
                {featuredEvents ? featuredEvents.map((event, i) => (
                    <FeaturedEventsComponent
                        key={i}
                        event={event}
                    />
                )) : <div></div>}
            </Carousel>
        </>
    );
};


export default FeaturedCarousel;


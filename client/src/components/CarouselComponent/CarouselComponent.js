import React from 'react';

// core components
import CarouselItems from '../CarouselComponent/CarouselItems'

// @material-ui/core
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from "@material-ui/core/styles";

//testing carousel
import trooper from '../../assets/images/trooper.jpg'
import fadedTrooper from '../../assets/images/fadedTrooper.jpg'
import crashlanding from '../../assets/images/crashlanding.jpg'
import falcon from '../../assets/images/falcon.jpg'


const useStyles = makeStyles({
    indicators: {
        position: "absolute",
        transform: "scale(3) rotate(90deg)",
        width: "200px",
        right: 0,
        padding: 0,
        zIndex: 1000,
        top: "30%",
    },
})


const CarouselComponent = () => {
    const classes = useStyles()
    const items = [
        trooper,
        falcon,
        fadedTrooper,
        crashlanding
    ]

    return (
        <Carousel
            indicatorContainerProps={{className:classes.indicators}}
            autoPlay={true}
            interval={3000}
            animation={"fade"}
            // next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            // prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
            {
                items.map((url, i) => <CarouselItems key={i} url={url} />)
            }
        </Carousel>
    );
};

export default CarouselComponent;
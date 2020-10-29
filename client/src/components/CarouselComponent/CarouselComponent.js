import React, {useEffect} from 'react';
import { getQuote } from '../../Redux/actions/quoteFront';
import {useDispatch, useSelector } from 'react-redux'

// core components
import CarouselItems from '../CarouselComponent/CarouselItems'

// @material-ui/core
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from "@material-ui/core/styles";

//testing carousel
// import trooper from '../../assets/images/trooper.jpg'
// import fadedTrooper from '../../assets/images/fadedTrooper.jpg'
// import crashlanding from '../../assets/images/crashlanding.jpg'
// import falcon from '../../assets/images/falcon.jpg'
import nextlevel from '../../assets/images/starwarsgifs/nextlevel.gif'
import starwars3 from '../../assets/images/starwarsgifs/starwars3.gif'
import starwars2 from '../../assets/images/starwarsgifs/starwars2.gif'
import starwars4 from '../../assets/images/starwarsgifs/starwars4.gif'
import tenor from '../../assets/images/starwarsgifs/tenor.gif'




const useStyles = makeStyles({

    containerAbso: {
        zIndex: 2012,
        position: "absolute",
        width: "50%",
        top: "45%",
        left: "10%"
    },
})


const CarouselComponent = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const items = [
        nextlevel,
        starwars2,
        starwars3,
        starwars4,
        tenor
    ]

    const quote = useSelector(state => state.quoteSlice.quote)
    

    // clean up timeout with abort controller
    const controller = new AbortController()
    useEffect(()=>{
        dispatch(getQuote())
        return () => controller.abort()
    },[dispatch])


    return (
        <>
            <div className={classes.containerAbso}>{ quote ? <h2 className="quote" >"{quote['starWarsQuote']}"</h2> : null }</div>
            <Carousel
                indicators={false}
                autoPlay={true}
                interval={4000}
                timeout={0}
                animation={"fade"}
                navButtonsAlwaysVisible={false}
                fullHeightHover={false}
            >
                {
                    items.map((url, i) => <CarouselItems key={i} url={url} />)
                }
            </Carousel>
        </>
    );
};

export default CarouselComponent;
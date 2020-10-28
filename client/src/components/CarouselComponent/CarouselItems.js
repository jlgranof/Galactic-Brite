import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    image: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: "absolute",
        height: "85vh",
        width: "100vw"
    },
})

const CarouselComponent = ({ url}) => {
    const classes = useStyles()
    return (
        <div>
            <img 
            className={classes.image}
            src={url}/>
        </div>
    );
};

export default CarouselComponent;
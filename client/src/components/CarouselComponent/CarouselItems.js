import React from 'react';

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    image: {
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
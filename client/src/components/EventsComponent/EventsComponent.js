import React from 'react';


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {

    },
})



const EventsComponent = () => {
    const classes = useStyles()
    return (
        <div>
            Event Card
        </div>
    );
};

export default EventsComponent;
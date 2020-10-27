import React from 'react';

// core components
import Header from '../Header/Header'
import CustomInput from '../SupportComponents/CustomInput'
// import CarouselComponent from '../CarouselComponent/CarouselComponent'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        // zIndex: 100,
        // height: "200px",
        // width: "50%",
        // margin: "0 auto",
        // backgroundColor: "blue",
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: " 1fr 2fr 1fr",
        width:"100vw",
        height:"100vh",
        backgroundColor: "yellow"
    },
    middle: {
        gridRow: "2/3",
        gridColumn: "2/3"

    }
})


const CreateEventForm = () => {
    const classes = useStyles()

    return (
        <>
            <div>
                <Header/>
            </div>
            <div className={classes.container}>
                <div className={classes.middle}>
                    <CustomInput />
                </div>
            </div>
        </>
    )
}
export default CreateEventForm;

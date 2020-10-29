import React, {useState} from 'react';


//redux
import { useSelector } from 'react-redux'

// assets
import featuredHeader from '../../assets/images/featuredHeader.jpg'
import icon1 from '../../assets/images/icon.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
import icon5 from '../../assets/images/icon5.png'
import icon6 from '../../assets/images/icon6.png'
import icon7 from '../../assets/images/icon7.png'
import icon8 from '../../assets/images/icon8.png'
import icon9 from '../../assets/images/icon9.png'
import icon10 from '../../assets/images/icon10.png'
import somethingMissing from '../../assets/images/somethingMissing.jpg'


// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        border: 0,
        pading: 0,
        outline: "none",
        position: "relative",
        maxWidth: "90%",
        height: 300,
        margin: "20px",
        background: "linear-gradient(0deg, rgba(30, 30, 30, 1) 0%, rgba(40, 40, 40, 1) 50%, rgba(30, 30, 30, 1) 100%)",
        '&:focus': {
            transform: 'scale(.95)'
        },
        '&:hover': {
            transform: 'scale(.995)'
        }

    },
    mediaRight: {
        display: "flex",
        flexDirection: "row-reverse",
        height: "100%",
        width: '100%',
    },
    mediaLeft: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: '100%',
    },
    mediaLeftImage: {
        height: "100%",
        width: "30%",
        borderLeft: "2px solid red",
        opacity: .8,
        transition: ".3s ease",
        '&:hover': {
            opacity: 1
        }
        
    },
    mediaRightImage: {
        height: "100%",
        width: "30%",
        borderRight: "2px solid red",
        overflow: "hidden",
        opacity: .8,
        transition: ".3s ease",
        '&:hover': {
            opacity: 1
        }
    },
    iconRight: {
        position: "absolute",
        bottom: 50,
        right: 50,
        borderRadius: "270px",
        boxShadow: "10px 10px -10px 10px rgb(40, 39, 39)",
        transform: "rotate(-40deg)",
        opacity: 0.2
    },
    iconLeft: {
        position: "absolute",
        bottom: 50,
        left: 50,
        borderRadius: "270px",
        boxShadow: "10px 10px -10px 10px rgb(40, 39, 39)",
        transform: "rotate(40deg)",
        opacity: 0.2
    },
    iconSize: {
        width: "80px",
        height: "80px",
    },
    eventDetails: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
        textOverflow:"fade(100%)",
        height: "80%",
    },
    eventName: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 24,
        margin: "20px",
        width: "100%",
        color: "white",
    },
    eventNameTitle: {
        transition: ".4s ease",
        '&:hover': {
            color: "red"
        }
    },
    eventDescription: {
        borderTop: "4px solid rgba(60,60,60, .2)",
        paddingTop: "20px",
        margin: " 10px 0px 40px 30px",
        width: "80%",
        color: 'grey',
        transition: ".4s ease",
        '&:hover': {
            color: "rgb(200,200,200)"
        }
    },
    links: {
        paddingRight: "40px",
    },
    button: {
        transition: ".3s",
        "&:hover":{
            opacity: 1,
            transform: "scale(1.1)"
        }
    }

});

const iconList = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
]


const EventsComponent = (props) => {
    const classes = useStyles()
    const user = useSelector(state => state)
    const [isLoaded, setIsLoaded]= useState(true)

    const {
        rtl,
        avatar,
        date,
        description,
        eventName,
        featured,
        id,
        planet
    } = props
    const classSelector = classNames({
        [classes.mediaLeft]: rtl,
        [classes.mediaRight]: !rtl,
    });
    const mediaSelector = classNames({
        [classes.mediaLeftImage]: !rtl,
        [classes.mediaRightImage]: rtl,
    });
    const iconSelector = classNames({
        [classes.iconRight]: rtl,
        [classes.iconLeft]: !rtl,
    })
    const handleError = () => setIsLoaded(false)

    const icon = iconList[Math.floor(Math.random() * iconList.length)];


    console.log("avatar",avatar.status)
    return (
        <button className={classes.root}>
            <div className={classSelector}>
                {isLoaded ?
                <img
                    className={mediaSelector}
                    onError={handleError}
                    src={avatar}
                />
                :<img 
                    className={mediaSelector}
                    onError={handleError}
                    src={somethingMissing}
                />}
                <div className={classes.eventDetails}>
                    <span className={classes.eventName}>
                            <div className={classes.eventNameTitle}>
                            {eventName}
                            </div>
                        <div className={classes.links}>
                            <Button 
                                size="small" 
                                className={classes.button} 
                                style={{ color: "red", opacity: ".8" }}
                            >
                                Ticket
                            </Button>
                            <Button 
                                    size="small" 
                                    style={{ color: "red", opacity: ".8"}}
                                    className={classes.button}
                                >
                                Learn More
                            </Button>
                        </div>
                    </span>
                    <span className={classes.eventDescription}>
                        {description.description}
                    </span>
                </div>
            </div>
            <div className={iconSelector}>
                {icon? <img 
                src={icon}
                className={classes.iconSize}
                />:null}
            </div>

        </button>
    );
};

export default EventsComponent;
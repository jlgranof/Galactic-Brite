import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { addBookmarkToUser } from '../../Redux/actions/eventsActions'

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// material-ui/icons
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        maxWidth: 360,
        backgroundColor: "rgba(26,26,26,1)",
        color: "white",
        height: "500px",
        margin: "60px 0 200px 0",
        paddingBottom: "40px",
        "&:hover": {
            transform: "scale(1.05)"
        }
    },
    media: {
        color: "white",
        height: "200px",
        width: "100%",
        opacity: "0.8",
        "&:hover": {
            opacity: 1,

        }
    },
    header: {
        color: "white",
        padding: "5px"
    },
    avatar: {
        backgroundColor: red[500],
    },
    body: {
        color: "grey",
        transition: ".3s",
        textAlign: "center",
        padding: "20px",
        "&:hover": {
            color: "white",

        }
    },
    date: {
        color: "grey",
        transition: ".3s",
        textAlign: "center",
        "&:hover": {
            color: "white",

        }
    },
    tags: {

    },
    icon: {
        color: "red",
        opacity: .7,
        transition: ".2s",
        "&:hover": {
            opacity: 1,
            transform: "scale(1.1)"
        }
    },
    cardTextHover: {
        fontSize: "20px",
        fontFamily: "monospace",
        color: "red",
        opacity: ".5",
        transition: ".2s",
        "&:hover": {
            opacity: 1,
            transform: "scale(1.1)"
        }
    }
})



const FeaturedEventsComponent = (props) => {

    const {
        style, 
        event,
        id,
    } = props

    const dispatch = useDispatch()
    const classes = useStyles()
    const history = useHistory()
    const user = useSelector(state => state.auth)
    const registerSlice = useSelector(state => state.registerSlice)

    const [isBookmarked, setIsBookmarked] = useState(false)


    useEffect(() => {
        if (isBookmarked) {
            const details = {
                "event_name": event.name,
                "user_id": user.id,
                "is_registered": false
            }
            dispatch(addBookmarkToUser(details))
        }
    }, [isBookmarked])


    const handleAddTicket = () => {

    }

    const handleEventDetails = (e) => {
        if (e.target.id === id) {
            return
        }
        history.push({
            pathname: '/event-details/random', state: {
                avatar: event.event_picture_url,
                date: event.event_date,
                paragraph: event.event_description,
                eventName: event.name,
                featured: event.is_featured,
                id: event.id,
                planet: event.event_planet
            }
        })
    }

    const handleBookmark = () => {
        if (user.id !== undefined) {
            setIsBookmarked(!isBookmarked)
            if (registerSlice) {
                
            }
        }
    }
    return (
        <div 
        {...style}>
            <Card className={classes.root}>
                <CardHeader
                className={classes.header}
                    avatar={
                        <Avatar aria-label="host" src={event.host.avatar_url} className={classes.avatar}/>
                    }
                    title={event.name}
                />
                <div className={classes.tags}>
                    {isBookmarked ?
                        <IconButton 
                        className={classes.icon}
                        onClick={handleBookmark}>
                                <BookmarkIcon style={{ color: "red" }} />
                        </IconButton>
                            : <IconButton 
                            className={classes.icon}
                            onClick={handleBookmark}>
                                    <BookmarkBorderIcon style={{ color: "red" }} />
                        </IconButton>
                    }
                    <Button
                        size="small"
                        className={classes.button}
                        style={{ color: "red", opacity: ".8" }}
                    >
                        <span
                            className={classNames(classes.cardLink, classes.cardTextHover)}
                            onClick={handleAddTicket}
                        >
                            Ticket
                        </span>
                    </Button>
                </div>
                <Typography variant="body2" color="textSecondary" className={classes.date}>
                    {event.event_date}
                </Typography >
                    <img 
                        onClick={handleEventDetails}
                        className={classes.media}
                        src={event.event_picture_url}
                    />
                    <Typography 
                    onClick={handleEventDetails}
                    variant="body2" 
                    color="textSecondary" 
                    className={classes.body}>
                        {event.event_description}
                    </Typography>
            </Card>
        </div>
    );
};

export default FeaturedEventsComponent;

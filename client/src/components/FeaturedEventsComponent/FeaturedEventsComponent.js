import React, { useState } from 'react';

//redux
import { useSelector } from 'react-redux'

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// material-ui/icons
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useEventCallback } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "rgba(26,26,26,1)",
        color: "white",
        height: "480px",

    },
    media: {
        color: "white",
        height: "200px",
        width: "300px",
    },
    header: {
        color: "white"
    },
    avatar: {
        backgroundColor: red[500],
    },
    body: {
        color: "white"
    },
})



const FeaturedEventsComponent = ({style, event}) => {
    console.log(event)
    const classes = useStyles()
    return (
        <div {...style}>
            <Card className={classes.root}>
                <CardHeader
                className={classes.header}
                    avatar={
                        <Avatar aria-label="host" src={event.host.avatar_url} className={classes.avatar}/>
                    }
                    title={event.name}
                />
                <Typography variant="body2" color="textSecondary" className={classes.body}>
                    {event.event_date}
                </Typography >
                <img 
                    className={classes.media}
                    src={event.event_picture_url}
                />

                    <Typography variant="body2" color="textSecondary" className={classes.body}>
                        {event.event_description}
                    </Typography >


                    <IconButton aria-label="add to bookmarks">
                        <BookmarkBorderIcon style={{ color: "white"}}/>
                    </IconButton>

            </Card>
        </div>
    );
};

export default FeaturedEventsComponent;

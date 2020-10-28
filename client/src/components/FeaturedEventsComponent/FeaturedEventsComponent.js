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
import Collapse from '@material-ui/core/Collapse';
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
        backgroundColor: "rgba(0,0,0,.8)",
        color: "white"
    },
    media: {
        color: "white",
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    body: {
        color: "white"
    }
})



const FeaturedEventsComponent = ({style, event}) => {
    console.log(event)
    const classes = useStyles()
    return (
        <div {...style}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="host" src={event.event_picture_url} className={classes.avatar}/>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={event.event_picture_url}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.body}>
                        {event.event_description}
                    </Typography >
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">

                    </IconButton>
                    <IconButton>
                        <BookmarkBorderIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default FeaturedEventsComponent;

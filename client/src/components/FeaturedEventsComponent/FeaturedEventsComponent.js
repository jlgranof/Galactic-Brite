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
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "rgba(26,26,26,1)",
        color: "white",
        height: "500px",
        margin: "60px 0 200px 0"

    },
    media: {
        color: "white",
        height: "200px",
        width: "100%",
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
    tags: {

    }
})



const FeaturedEventsComponent = ({style, event}) => {
    const [isBookmarked, setIsBookmarked] = useState(false)

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
                <div className={classes.tags}>
                    {isBookmarked ?
                    <IconButton onClick={() => setIsBookmarked(false)}>
                            <BookmarkIcon style={{ color: "red" }} />
                    </IconButton>
                        : <IconButton onClick={() => setIsBookmarked(true)}>
                                <BookmarkBorderIcon style={{ color: "red" }} />
                    </IconButton>}
                </div>
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
            </Card>
        </div>
    );
};

export default FeaturedEventsComponent;

import React, { useState } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux'

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
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth)
    const [isBookmarked, setIsBookmarked] = useState(false)

    const handleAddTicket = () => {

    }

    const handleBookmark = () => {
        if (user.id !== undefined) {
            setIsBookmarked(!isBookmarked)
            if (isBookmarked) {
                // dispatch(addBookmarkToUser())
                // user id 
                // name
            }
        }
    }
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
                        <IconButton onClick={handleBookmark}>
                                <BookmarkIcon style={{ color: "red" }} />
                        </IconButton>
                            : <IconButton onClick={handleBookmark}>
                                    <BookmarkBorderIcon style={{ color: "red" }} />
                        </IconButton>
                    }
                    <Button
                        size="small"
                        className={classes.button}
                        style={{ color: "red", opacity: ".8" }}
                    >
                        <span
                            onClick={handleAddTicket}
                        >
                            Ticket
                        </span>
                    </Button>
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

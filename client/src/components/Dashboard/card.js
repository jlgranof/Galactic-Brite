import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const urls = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThQUnhWZqYrbaRtrvH6uUJxiF64UMXBWO3XQ&usqp=CAU',
'https://pm1.narvii.com/6989/837a8e36313c4a026a2f5acb9fe0a9f255d93a92r1-1080-1920v2_hq.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_sDERiegE5BSNiwpioOjCt5ndx89W1t4XNw&usqp=CAU',
'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jabba_the_Hutt.jpg/498px-Jabba_the_Hutt.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ633qJmSKAVdZul4oWR-f9wB6US_N_bHee2g&usqp=CAU',
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQALITa_iwn6z77Xr6RMHDJG-0l8pvFYI--tA&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYj2Rw2Crz24sNcXZ9v9KfnlEZupa_ZdmMKQ&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS9TwNUBH0EbzmUt6OWZ4XhjIsiIQ84jf3tg&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSczQtK1E0AgyUchH_Ov7hj5xHnQr69LT7O2g&usqp=CAU']

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const {
    name,
    randomNum
  } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= {urls[randomNum]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${name}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lucas ipsum dolor sit amet letaki cad dalonbian panaka saché mod ventress luuke kendal drovian.
          Maarek jobal fel yarael. Kuat naberrie rattataki unduli dak mantell. Reach terrik rotta codru-ji
          rex ev-9d9 wyl. Cody vader paaerduag c-3po jan bail aayla jerjerrod. Rishi raymus moff anthos hoth kiffar.
          Darth ulic quelli obi-wan vestara organa rishi darth. Xappyh leia ruwee amidala droopy olié boltrunians
          sal-solo. Borvo watto fosh san. Wicket ogemite zeltron geonosis gran tharen anakin tion zuggs. Mayagil
          clawdite dalonbian gamorrean tenel.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <DeleteIcon />
        </Button>
        <Button size="small" color="primary">
          <DescriptionIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

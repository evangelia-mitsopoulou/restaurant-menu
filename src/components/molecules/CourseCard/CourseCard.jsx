import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { Whatshot, Info } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import './courseCard.scss';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  whatshot: {
    marginLeft: 'auto'
  }
});


function CourseCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
       <CardMedia className= 'course-card__media' image='https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70' style={{height:140}}></CardMedia>
        <CardContent> 
        <Typography gutterBottom variant="h5"> Grilled Vegetable Bruschetta</Typography>
        <Typography gutterBottom variant="body2" color="textSecondary" component="p"> What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?</Typography>    
        </CardContent> 
        </CardActionArea>
        <CardActions>
        <Info></Info>
        <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p"> milk, gluten</Typography>    
        <Whatshot className={classes.whatshot}></Whatshot>
        </CardActions>
    </Card>
  );
}

export default CourseCard;
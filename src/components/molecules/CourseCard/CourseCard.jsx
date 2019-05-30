import React from 'react';
import './courseCard.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Whatshot, Info } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


function CourseCard(props) {
  
  return (
    <Card>
      <CardActionArea>
       <CardMedia className= 'course-card__media' image={props.image}></CardMedia>
        <CardContent> 
        <Typography gutterBottom variant="h5"> {props.cardTitle}</Typography>
        <Typography gutterBottom variant="body2" color="textSecondary" component="p"> {props.description}</Typography>    
        </CardContent> 
        </CardActionArea>
        <CardActions>
        <Info></Info>
        <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p"> {props.allergy}</Typography>    
        <Whatshot></Whatshot>
        </CardActions>
    </Card>
  );
}

export default CourseCard;
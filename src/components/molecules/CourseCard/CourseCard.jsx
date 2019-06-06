import React from 'react';
import './courseCard.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Whatshot, Info } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';



class CourseCard extends React.Component{
  
  setSpicyIcons(array){
    let spicyArray;
    switch (array.length) {
      case 1:
        spicyArray = new Array(1).fill(1);
        break;
      case 2:
      case 3:
        spicyArray = new Array(2).fill(2);
        break; 
      case 4:
        spicyArray = new Array(3).fill(3);
        break;
      default:
        spicyArray = [];
    }
    return spicyArray;
  }

  render(){

    const arr = new Array(this.props.spicyLevel);
    const spicyArray = this.setSpicyIcons(arr);
  
    return (
      <Card onClick={this.props.onClick} id={this.props.id} allergy={this.props.allergy}>
        <CardActionArea>
         <CardMedia className= 'course-card__media' image={this.props.image}></CardMedia>
          <CardContent> 
          <Typography gutterBottom variant="h5"> {this.props.cardTitle}</Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p"> {this.props.description}</Typography>    
          </CardContent> 
          </CardActionArea>
          <CardActions>
          <div class="allergy">
          { this.props.allergy.length > 0 &&
          <Info></Info>}
          <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p"> {this.props.allergy}</Typography>    
          </div>
          <div class="spicy"> 
            {spicyArray.map(()=>{
              return  <Whatshot></Whatshot> 
            })}    
            </div>  
          </CardActions>
      </Card>
    );
  }
}

export default CourseCard;
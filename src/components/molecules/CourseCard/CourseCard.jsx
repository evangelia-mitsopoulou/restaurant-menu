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

  constructor(props){
    super(props);
    this.arr = new Array(this.props.spicyLevel);
    this.spicyArray = this.setSpicyIcons(this.arr);
    this.allergy = this.props.allergy.length > 1 ? this.props.allergy.join(',') : this.props.allergy;
  }
  
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

    return (
      <Card onClick={this.props.onClick} key={this.props.id} id={this.props.id} allergy={this.props.allergy}>
        <CardActionArea>
         <CardMedia className= 'course-card__media' image={this.props.image}></CardMedia>
          <CardContent> 
          <Typography gutterBottom variant="h5"> {this.props.cardTitle}</Typography>
          <Typography className="block-with-text" gutterBottom variant="body2" color="textSecondary" component="p"> {this.props.description}</Typography>    
          </CardContent> 
          </CardActionArea>
          <CardActions>
          <div className="allergy">
          { this.props.allergy.length > 0 &&
          <Info></Info>}
          <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p"> {this.allergy}</Typography>    
          </div>
          <div className="spicy"> 
            {this.spicyArray.map((e,i)=>{
              return  <Whatshot key={i}></Whatshot> 
            })}    
            </div>  
          </CardActions>
      </Card>
    );
  }
}

export default CourseCard;
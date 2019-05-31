import React from 'react';
import './coursesCardList.scss';
import Grid from '@material-ui/core/Grid';
import CourseCard from '../../molecules/CourseCard/CourseCard.jsx';
import CoursesData from '../../../data/courses.json';

class CoursesCardList extends React.Component {

    constructor(props){
        super(props)
        this.handleClickCard = this.handleClickCard.bind(this)
        this.state = {
            activeMenu: 0
        }  
    }

    handleClickCard(){
        console.log('clicked Card');
        /*this.setState((previousValue)=>{
            this.setState = previousValue + 1;
        });*/
    }

    render() {
        
        const filteredCourses =  CoursesData.filter(data=>data.courseType == this.state.activeMenu)

        return (
            <Grid
                container
                alignItems="center"
                spacing={1}
            >
            {filteredCourses.map((response)=>{
                    return <CourseCard
                             key = {response.id}
                             image = {response.image}
                             cardTitle = {response.title}
                             description = {response.description}
                             allergy={response.allery}
                             onClick= {this.handleClickCard}
                             />
                })}
            </Grid>
        );
    }
}

export default CoursesCardList;

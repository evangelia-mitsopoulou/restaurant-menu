import React from 'react';
import './coursesCardList.scss';
import Grid from '@material-ui/core/Grid';
import CourseCard from '../../molecules/CourseCard/CourseCard.jsx';
import CoursesData from '../../../data/courses.json';

class CoursesCardList extends React.Component {

    render() {


        return (
            <Grid
                container
                alignItems="center"
                spacing={1}
            >
            {CoursesData.map((response)=>{
                    return <CourseCard
                             key = {response.id}
                             image = {response.image}
                             cardTitle = {response.title}
                             description = {response.description}
                             allergy={response.allery}
                             />
                })}
            </Grid>
        );
    }
}

export default CoursesCardList;

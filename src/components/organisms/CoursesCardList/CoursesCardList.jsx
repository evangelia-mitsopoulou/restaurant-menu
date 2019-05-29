import React from 'react';
import './coursesCardList.scss';
import Grid from '@material-ui/core/Grid';
import CourseCard from '../../molecules/CourseCard/CourseCard.jsx';

function CoursesCardList() {
    return (
        <Grid 
          container 
          justify="initial"
          alignItems="center"
          spacing={1}
         >
            <Grid item xs={6} sm={4} md={3}>
                <CourseCard></CourseCard>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
                <CourseCard></CourseCard>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
                <CourseCard></CourseCard>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
                <CourseCard></CourseCard>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
                <CourseCard></CourseCard>
            </Grid>
        </Grid>
    );
}

export default CoursesCardList;

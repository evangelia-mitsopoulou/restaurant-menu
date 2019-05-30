import React from 'react';
import './coursesCardList.scss';
import Grid from '@material-ui/core/Grid';
import CourseCard from '../../molecules/CourseCard/CourseCard.jsx';
import CoursesData from '../../../data/courses.json';

class CoursesCardList extends React.Component {

   /* componentDidMount() {
        this.fetchCourses();
    }

    fetchCourses(){
        fetch()
            .then(response => response.json())
    }*/

    render() {
      
        const image = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70";
        const title = "test title";
        const description = "test description";
        const allergy = "milk,egg";
        const spicy = 1;

        return (
            <Grid
                container
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard 
                        image = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70"
                        title ="Grilled Vegetable Bruschetta"
                        description="What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?"
                        allergy="milk, egg"
                        spicy="1"
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard 
                        image = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70"
                        title ="Grilled Vegetable Bruschetta"
                        description="What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?"
                        allergy="milk, egg"
                        spicy="1"
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard 
                         image = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70"
                        title ="Grilled Vegetable Bruschetta"
                        description="What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?"
                        allergy="milk, egg"
                        spicy="1"
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard 
                        image = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70"
                        title ="Grilled Vegetable Bruschetta"
                        description="What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?"
                        allergy="milk, egg"
                        spicy="1"
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard 
                        image = "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F200707-r-xl-grilled-vegetable-bruschetta.jpg%3Fitok%3DkP4cvjXP&w=1600&q=70"
                        title ="Grilled Vegetable Bruschetta"
                        description="What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?"
                        allergy="milk, egg"
                        spicy="1"
                    />
                </Grid>
            </Grid>
        );
    }
}

export default CoursesCardList;

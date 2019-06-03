import React from 'react';
import './coursesCardList.scss';
import Grid from '@material-ui/core/Grid';
import CourseCard from '../../molecules/CourseCard/CourseCard.jsx';
import CoursesData from '../../../data/courses.json';

class CoursesCardList extends React.Component {

    constructor(props) {
        super(props)
        this.handleClickCard = this.handleClickCard.bind(this)
        this.state = {
            selectedCourses: []
        }
    }

    handleClickCard(e) {
        e.persist();
        let id = parseInt(e.currentTarget.id);
        this.setState( state => {    
            const selectedCourses = state.selectedCourses.concat(id);          
                return {
                    selectedCourses
                }
            }
        )

       
    };

    render() {
        console.log('state after set', this.state);
        console.log('activeMenu', this.props);
        const filteredCourses = CoursesData.filter(data => data.courseType == this.props.activeMenu)

        return (
            <Grid
                container
                alignItems="center"
                spacing={1}
            >
                {filteredCourses.map((response) => {
                    return <CourseCard
                        key={response.id}
                        id={response.id}
                        image={response.image}
                        cardTitle={response.title}
                        description={response.description}
                        allergy={response.allery}
                        onClick={this.handleClickCard}
                    />
                })}
            </Grid>
        );
    }
}

export default CoursesCardList;

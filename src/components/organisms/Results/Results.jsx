import React from 'react';
import './results.scss';
import CoursesData from '../../../data/courses.json';


const menus = {
  0: "Hors d'oeuvres",
  1: "Soup",
  2: "Fish",
  3: "Salad",
  4: "Main Course",
  5: "Dessert"
}

class Results extends React.Component {

  constructor(props) {
    super(props);
  }

  renderResultTitle = (item) => {
    return (<span>{item.title}</span>);
  }

  render() {

    const selectedCourses = this.props.selectedCourses;
    const values = [...selectedCourses.values()];

    return (
      <div className="results-container">
        <h1>Results</h1>
        {values.map((res, i) => {
            const resultsData = CoursesData.filter(data => data.courseType == i && res.indexOf(data.id) !== -1);
            return (
              <div key={i}>
                <h3>{menus[resultsData[0].courseType]} </h3>
                {resultsData.map((item) => {
                  return this.renderResultTitle(item);
                })}
              </div>
            )
        })}
      </div>
    );
  }
}

export default Results;
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

    this.selectedCourses = this.props.selectedCourses;
    this.values = [...this.selectedCourses.values()];
  }

  renderResultTitle = (item,f) => {
    return (<span key={item.id}>{item.title} {f ? ',' : ' ' } </span>);
  }

  render() {
    return (
      <div className="results-container">
        {this.values.map((res, i) => {
            const resultsData = CoursesData.filter(data => res.indexOf(data.id) !== -1);
            let flag = true;
            if (resultsData.length > 0)
            return (
              <div key={i}>
                <h3>{menus[resultsData[0].courseType]} </h3>
                {resultsData.map((item,k) => {
                  if (k === resultsData.length-1) flag = false;
                  return this.renderResultTitle(item,flag);
                })}
              </div>
            )
        })}
      </div>
    );
  }
}

export default Results;
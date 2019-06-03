import React from 'react';
import './results.scss';
import CoursesData from '../../../data/courses.json';


class Results extends React.Component{

  constructor(props){
    super(props);  
  } 
  
  render(){
    const resultsIds = Array.from(this.props.selectedCourses);
    console.log('resultsIds', resultsIds);
    
    const results = CoursesData.filter(data=>data.id in resultsIds);
    console.log('results', results);
    
    return (
      <div>
          <h1>Results</h1>
          {results.map((res)=>{
              return <p> {res.title}</p>
          })}
      </div>
    );
  }
}

export default Results;
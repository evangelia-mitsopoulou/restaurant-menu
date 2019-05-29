import React from 'react';
import './App.css';
import CourseCard from './components/molecules/CourseCard/CourseCard.jsx';
import MenuSelector  from './components/molecules/MenuSelector/MenuSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MenuSelector></MenuSelector>
          <CourseCard></CourseCard>
      </header>
    </div>
  );
}

export default App;

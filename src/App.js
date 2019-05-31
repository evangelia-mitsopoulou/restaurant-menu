import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CoursesCardList from './components/organisms/CoursesCardList/CoursesCardList';
import MenuSelector from './components/molecules/MenuSelector/MenuSelector';
import NavigatorBar from './components/molecules/NavigatorBar/NavigatorBar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      activeMenu : 0,
      selectedCourses:[],
      allergyList:[]
    }
  }

  render() {
    return (
      <div className="App">
        <MenuSelector></MenuSelector>
        <CoursesCardList></CoursesCardList>
        <NavigatorBar></NavigatorBar>
      </div >
    );
  }
}

export default App;

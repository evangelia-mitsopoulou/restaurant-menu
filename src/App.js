import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CoursesCardList from './components/organisms/CoursesCardList/CoursesCardList';
import MenuSelector from './components/molecules/MenuSelector/MenuSelector';
import NavigatorBar from './components/molecules/NavigatorBar/NavigatorBar';
import Button from '@material-ui/core/Button';
import MenuCategories from './data/menus.json';
import Results from './components/organisms/Results/Results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 0,
      selectedCourses: new Map(),
      allergyList: [],
      showResults: 0
    }
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handleSelectedCourseItems = this.handleSelectedCourseItems.bind(this)
  }

  handleNextButtonClick(e) {
    console.log('handle next button click');
    e.persist();
    this.setState(prevState => {
      return {
        activeMenu: prevState.activeMenu + 1,
        selectedCourses: this.state.selectedCourses,
        showResults: this.state.activeMenu !== MenuCategories.length - 1 ? 0 : 1
      }
    });
  }


  handleSelectedCourseItems(e) {


    e.persist();
    let id = parseInt(e.currentTarget.id),
      arr = [], previousArr = [], concatArr = [];

    console.log('handle selected course items and id', id);
    arr.push(id);

    this.setState(prevState => {
      previousArr = prevState.selectedCourses.get(this.state.activeMenu);
      console.log('previous Array', previousArr);
      concatArr = typeof previousArr !== 'undefined' ? arr.concat(previousArr) : arr;
      return {
        selectedCourses: this.state.selectedCourses.set(this.state.activeMenu, concatArr)
      }
    });
  }


  render() {
    console.log('this.state', this.state);
    return (
      <div className="App">
        <MenuSelector activeMenu={this.state.activeMenu}></MenuSelector>
        <CoursesCardList onClick={this.handleSelectedCourseItems} selectedCourses={this.state.selectedCourses} activeMenu={this.state.activeMenu}></CoursesCardList>
        {this.state.showResults == 0 &&
          <Button variant="contained" color="primary" onClick={this.handleNextButtonClick}>
            Next step
        </Button>}
        {this.state.showResults == 1 &&
          <Results selectedCourses={this.state.selectedCourses}></Results>}
      </div >
    );
  }
}

export default App;

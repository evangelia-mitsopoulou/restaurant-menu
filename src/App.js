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
      allergyList: new Set(),
      showResults: 0,
      activeButton: true
    }
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
    this.handleSelectedCourseItems = this.handleSelectedCourseItems.bind(this)
  }

  handleNextButtonClick(e) {
    e.persist();
    this.setState(prevState => {
      return {
        activeMenu: prevState.activeMenu + 1,
        selectedCourses: this.state.selectedCourses,
        showResults: this.state.activeMenu !== MenuCategories.length - 1 ? 0 : 1,
        activeButton: this.state.activeMenu === 3 ? false : true
      }
    });
  }


  handleSelectedCourseItems(e) {
    e.persist();
    let id = parseInt(e.currentTarget.id),
      arr = [], previousArr = [], concatArr = [];
    let allergy = e.currentTarget.getAttribute('allergy');
    console.log('allergy', allergy);

    //Array is of object type in javascript, the case where a food 
    // is allergic in more than one ingredient

    switch (typeof allergy) {
      case 'undefined':
        console.log('in switch undefined');
        break;
      case 'object':
        console.log('in switch object');
        allergy = allergy.split(',');
        console.log('allergy now', allergy);
        break;
      case 'string':
        console.log('in switch string');
        if (allergy.indexOf(',') !== -1) {
         allergy = allergy.split(',');
          console.log('allergy splitted', allergy);
        }
        break;
      default:
        console.log('defaul');
    }


    console.log('e.currentTarget', e.currentTarget);


    arr.push(id);

    this.setState(prevState => {
      previousArr = prevState.selectedCourses.get(this.state.activeMenu);
      concatArr = typeof previousArr !== 'undefined' ? arr.concat(previousArr) : arr;
      return {
        selectedCourses: this.state.selectedCourses.set(this.state.activeMenu, concatArr),
        activeButton: true,
        //allergyList: typeof prevState.allergyList !== 'undefined' ? prevState.allergy.concat(allergy) : allergy
        //allergyList: (typeof prevState.allergyList !== 'undefined') ? (typeof allergy !== 'undefined') ? prevState.allergyList.add(allergy) : prevState.allergyList : allergy
        allergyList : this.setAllergyList(prevState, allergy)
      }
    });
  }

  setAllergyList(prevState, allergy) {

    let res;

    if (typeof prevState !== 'undefined') {
      if (typeof allergy !== 'undefined' && allergy.length > 0) {
        if (typeof allergy === 'object') {
          for (let ingredient of allergy){
            res = prevState.allergyList.add(ingredient);
          }       
        }
      if (typeof allergy === 'string') res = prevState.allergyList.add(allergy);
      } else {
        res = prevState.allergyList;
      }
    } else {
      //it is the first time, there is no previous state and allergies
      
      if (typeof allergy === "string" && allergy.length === 0) {
        res = prevState.allergyList
      } else {
        res = allergy;
      }   
    }

    return res;
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="App">
        <MenuSelector activeMenu={this.state.activeMenu}></MenuSelector>
        <CoursesCardList onClick={this.handleSelectedCourseItems} selectedCourses={this.state.selectedCourses} activeMenu={this.state.activeMenu}></CoursesCardList>
        {this.state.showResults == 0 &&
          <Button disabled={this.state.activeButton === false} variant="contained" color="primary" onClick={this.handleNextButtonClick}>
            Next step
        </Button>}
        {this.state.showResults == 1 &&
          <Results selectedCourses={this.state.selectedCourses}></Results>}
      </div >
    );
  }
}

export default App;

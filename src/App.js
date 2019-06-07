import React from 'react';
import './App.scss';
import CoursesCardList from './components/organisms/CoursesCardList/CoursesCardList';
import MenuSelector from './components/molecules/MenuSelector/MenuSelector';
import NavigatorBar from './components/molecules/NavigatorBar/NavigatorBar';
import MenuCategories from './data/menus.json';
import Results from './components/organisms/Results/Results';
import AllergyInfo from './components/molecules/AllergyInfo/AllergyInfo';

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
      allergy = e.currentTarget.getAttribute('allergy'),
      arr = [];

    arr.push(id);

    this.setState((prevState) => {
      return {
        selectedCourses: this.setSelectedCourses(prevState, arr),
        allergyList: this.setAllergyList(prevState, allergy),
        activeButton:true    
      }
    });
  }

  setSelectedCourses(prevState, arr){
    let previousArr = prevState.selectedCourses.get(this.state.activeMenu);
    let concatArr = typeof previousArr !== 'undefined' ? arr.concat(previousArr) : arr; 
    return this.state.selectedCourses.set(this.state.activeMenu, concatArr);
  };

  setAllergyList(prevState, allergy) {

    let res;

    if (typeof allergy === 'string' && allergy.indexOf(',') !== -1) {
      allergy = allergy.split(',');
  }

    if (typeof allergy === 'object') {
        for (let ingredient of allergy) {
          res = prevState.allergyList.add(ingredient);
        }
      }  

    if (typeof allergy === 'string' && allergy.length > 1) res = prevState.allergyList.add(allergy);
    
    if (typeof allergy === "string" && allergy.length === 0) {
      res = prevState.allergyList
    } 

    return res;

  }

  render() {
    return (
      <div>
        <MenuSelector activeMenu={this.state.activeMenu}></MenuSelector>
        <CoursesCardList onClick={this.handleSelectedCourseItems} selectedCourses={this.state.selectedCourses} activeMenu={this.state.activeMenu}></CoursesCardList>
        {this.state.showResults == 0 &&
          <NavigatorBar activeButton={this.state.activeButton} onClick={this.handleNextButtonClick}></NavigatorBar>
        }
        {this.state.showResults == 1 &&
          <div>
            <h1>Your Menu</h1>
            <AllergyInfo list={this.state.allergyList}></AllergyInfo>
            <Results selectedCourses={this.state.selectedCourses}></Results>
          </div>
        }
      </div>
    );
  }
}

export default App;

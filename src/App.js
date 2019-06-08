import React, { useState} from 'react';
import './App.scss';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CoursesCardList from './components/organisms/CoursesCardList/CoursesCardList';
import MenuSelector from './components/molecules/MenuSelector/MenuSelector';
import NavigatorBar from './components/molecules/NavigatorBar/NavigatorBar';
import MenuCategories from './data/menus.json';
import Results from './components/organisms/Results/Results';
import AllergyInfo from './components/molecules/AllergyInfo/AllergyInfo';
import theme from "./theme/theme";

function App () {

  const [activeMenu, setActiveMenu] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState(new Map());
  const [allergyList, setAllergyList] = useState(new Set());
  const [showResults, setShowResults] = useState(0);
  const [activeButton, setActiveButton] = useState(true);
  

  function handleNextButtonClick(e) {
    e.persist();
    setActiveMenu(activeMenu +1);
    setSelectedCourses(selectedCourses);
    setShowResults(activeMenu !== MenuCategories.length - 1 ? 0 : 1);
    setActiveButton(activeMenu === 3 ? false : true);
  }

  function handleSelectedCourseItems(e) {

    e.persist();
    let id = parseInt(e.currentTarget.id),
      allergy = e.currentTarget.getAttribute('allergy'),
      arr = [];
   
    e.currentTarget.style.border = "2px solid #c51162";
   
    arr.push(id);

    setSelectedCourses(calculateSelectedCourses(selectedCourses, arr));
    setAllergyList(calculateAllergyList(allergyList, allergy));
    setActiveButton(true);
  }

  function calculateSelectedCourses(prevState, arr){
    let previousArr = prevState.get(activeMenu);
    let concatArr = typeof previousArr !== 'undefined' ? arr.concat(previousArr) : arr; 
    return prevState.set(activeMenu, concatArr);
  };

  function calculateAllergyList(prevState, allergy) {

    let res;

    if (typeof allergy === 'string' && allergy.indexOf(',') !== -1) {
      allergy = allergy.split(',');
  }

    if (typeof allergy === 'object') {
        for (let ingredient of allergy) {
          res = prevState.add(ingredient);
        }
      }  

    if (typeof allergy === 'string' && allergy.length > 1) res = prevState.add(allergy);
    
    if (typeof allergy === "string" && allergy.length === 0) {
      res = prevState;
    } 

    return res;

  }

    return (
      <MuiThemeProvider theme={theme}> 
      <div>
        <MenuSelector activeMenu={activeMenu}></MenuSelector>
        <CoursesCardList onClick={handleSelectedCourseItems} selectedCourses={selectedCourses} activeMenu={activeMenu}></CoursesCardList>
        {showResults === 0 &&
          <NavigatorBar activeButton={activeButton} activeMenu={activeMenu} onClick={handleNextButtonClick}></NavigatorBar>
        }
        {showResults === 1 &&
          <div>
            <h1>Your Menu</h1>
            <AllergyInfo list={allergyList}></AllergyInfo>
            <Results selectedCourses={selectedCourses}></Results>
          </div>
        }
      </div>
      </MuiThemeProvider>
    );
  
}

export default App;
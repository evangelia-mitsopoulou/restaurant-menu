import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CoursesCardList from './components/organisms/CoursesCardList/CoursesCardList';
import MenuSelector from './components/molecules/MenuSelector/MenuSelector';
import NavigatorBar from './components/molecules/NavigatorBar/NavigatorBar';
import Button from '@material-ui/core/Button';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeMenu : 0,
      selectedCourses:[],
      allergyList:[]
    }
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this)
  }

  handleNextButtonClick(e){
    console.log('handle next button click');
      this.setState(prevState => {
        return {
          activeMenu : prevState.activeMenu + 1
        }
      });
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="App">
        <MenuSelector activeMenu={this.state.activeMenu}></MenuSelector>
        <CoursesCardList activeMenu={this.state.activeMenu}></CoursesCardList>
        <Button variant="contained" color="primary" onClick={this.handleNextButtonClick}>
                    Next step
                 </Button>
      </div >
    );
  }
}

export default App;

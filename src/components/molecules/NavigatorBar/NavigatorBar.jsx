import React from 'react';
import styles from './navigatorBar.module.scss';
import Button from '@material-ui/core/Button';
import MenuCategories from '../../../data/menus.json';


class NavigatorBar extends React.Component {

    render(){
        return (
            <div className={styles.navigator}>
                <Button disabled={this.props.activeButton === false} variant="contained" color="primary" onClick={this.props.onClick}>
                   {this.props.activeMenu < MenuCategories.length-1 ? "Next step" : "Results" }
                 </Button>
            </div>
        );
    }   
}

export default NavigatorBar;
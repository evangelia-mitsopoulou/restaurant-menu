import React from 'react';
import styles from './navigatorBar.module.scss';
import Button from '@material-ui/core/Button';


class NavigatorBar extends React.Component {

    render(){
        return (
            <div className={styles.navigator}>
                <Button disabled={this.props.activeButton === false} variant="contained" color="primary" onClick={this.props.onClick}>
                    Next step
                 </Button>
            </div>
        );
    }   
}

export default NavigatorBar;
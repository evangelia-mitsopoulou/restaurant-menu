import React from 'react';
import './navigatorBar.scss';
import Button from '@material-ui/core/Button';


class NavigatorBar extends React.Component {

    handleClick(){
        console.log('omg')
    }

    render(){
        return (
            <div className='navigator-container'>
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                    Next step
                 </Button>
            </div>
        );
    }
    
}

export default NavigatorBar;
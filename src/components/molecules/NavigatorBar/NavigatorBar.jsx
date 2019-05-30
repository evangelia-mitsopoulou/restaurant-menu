import React from 'react';
import './navigatorBar.scss';
import Button from '@material-ui/core/Button';

function NavigatorBar() {
    return (
        <div class='navigator-container'>
            <Button variant="contained" color="primary">
                Next step
             </Button>
        </div>
    );
}

export default NavigatorBar;
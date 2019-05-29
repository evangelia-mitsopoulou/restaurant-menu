import React from 'react';
import './menuSelector.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function MenuSelector() {
  return (
    <FormControl component="fieldset">
    <RadioGroup>
         <FormControlLabel checked={true}  value="appetizer" control={<Radio />} label="Appetizer" />
         <FormControlLabel disabled value="soup" control={<Radio />} label="Soup" />
         <FormControlLabel disabled value="fish" control={<Radio />} label="Fish" />
         <FormControlLabel disabled value="salad" control={<Radio />} label="Salad" />
         <FormControlLabel disabled value="maincourse" control={<Radio />} label="MainCourse" />
         <FormControlLabel disabled value="dessert" control={<Radio />} label="Dessert" />
    </RadioGroup>
    </FormControl>
  );
}

export default MenuSelector;

import React from 'react';
import './menuSelector.scss';
import MenuCategories from '../../../data/menus.json';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function MenuSelector(props) {
  return (
    <FormControl component="fieldset">
    <RadioGroup>
      {MenuCategories.map((response,i)=>{
        return <FormControlLabel key={response.id} checked={response.id == props.activeMenu} disabled={response.id !== props.activeMenu} value={response.menu} control={<Radio />} label={response.menu} />
      })}
      </RadioGroup>
      </FormControl>
  );
}

export default MenuSelector;

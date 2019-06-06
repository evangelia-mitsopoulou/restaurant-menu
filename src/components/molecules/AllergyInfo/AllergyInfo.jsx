import React from 'react';
import './allergyInfo.scss';
import Button from '@material-ui/core/Button';


function  AllergyInfo(props) {
      const list = Array.from(props.list);
   

        return (
        <div className='allergy-container'>
               <span><i> Allergy: </i></span>
       { list.map((response) => {
           return <span>{response}, </span>
       })}
            </div>
        );
   
    
}

export default AllergyInfo;
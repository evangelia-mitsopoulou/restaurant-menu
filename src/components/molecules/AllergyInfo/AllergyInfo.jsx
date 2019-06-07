import React from 'react';
import './allergyInfo.scss';


function AllergyInfo(props) {

    const list = Array.from(props.list);

    return (
        <div className='allergy-container'>
            <span><i> Allergic Ingredients: </i></span>
            {list.map((response) => {
                return <span><i>{response}</i>, </span>
            })}
        </div>
    );


}

export default AllergyInfo;
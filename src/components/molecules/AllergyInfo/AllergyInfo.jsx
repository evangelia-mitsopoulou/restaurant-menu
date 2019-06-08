import React from 'react';
import styles from './allergyInfo.module.scss';


class AllergyInfo extends React.Component {

    constructor(props){
        super(props);
        this.list = Array.from(this.props.list);
    }

    renderAllergyInfo= (item,f)=>{
        return (<span key={item}>{item}{f ? ',' : ' '} </span>)
    }

    render() {
        return (
            <div className={styles.allergyInfo}>
                <span> Allergic Ingredients: </span>
                {this.list.map((item,i) => {
                    let flag = true;
                    if (i === this.list.length -1) flag = false;
                    return this.renderAllergyInfo(item,flag);
                })}
            </div>
        );

    }

}

export default AllergyInfo;
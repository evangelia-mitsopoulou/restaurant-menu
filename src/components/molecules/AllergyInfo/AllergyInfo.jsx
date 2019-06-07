import React from 'react';
import './allergyInfo.scss';


class AllergyInfo extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.list = Array.from(this.props.list);
    }


    renderAllergyInfo= (item,f)=>{
        return (<span><i>{item}</i>{f ? ',' : ' '} </span>)
    }

    render() {
        return (
            <div className='allergy-container'>
                <span><i> Allergic Ingredients: </i></span>
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
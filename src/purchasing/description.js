import React from 'react';
import Button from '../componentsui/button.js';
import './description.scss';

class Description extends React.Component{

    render(){

        return(
            <div className="description">
                <h2>{this.props.title}</h2>
                <h5>{this.props.priceBuy}</h5>
                <h5>{this.props.pricePattern}</h5>
                <p>{this.props.description}</p>
                <div className="button-container">
                    <Button button="Buy Scarf" />
                    <Button button="Buy Pattern" />
                </div>
            </div>
        )
    }
}

export default Description
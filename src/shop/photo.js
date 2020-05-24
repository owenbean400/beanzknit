import React from 'react';
import {Link} from 'react-router-dom';
import './photo.scss';

class ShopIcon extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            Background: this.props.image,
            css: {
                marginTop: '-0px'
            }
        }
        this.showBuyPattern = this.showBuyPattern.bind(this);
        this.hideBuyPattern = this.hideBuyPattern.bind(this);
    }

    showBuyPattern = () => {
        this.setState( state => ({
            Background: this.props.image,
            css: {
                marginTop: '-108px'
            }
        }))
    }

    hideBuyPattern = () => {
        this.setState( state => ({
            Background: this.props.image,
            css: {
                marginTop: '-0px'
            }
        }))
    }
    


    render(props){

        return(
            <div className="shop-icon-container" onMouseEnter={this.showBuyPattern} onMouseLeave={this.hideBuyPattern}>
        <h4>{this.props.title}</h4>
        <div className="img-container">
            <img src={this.props.image} />
            <div className="buy-pattern-container" style={this.state.css}>
                <Link to={this.props.link}><h5>Buy Now</h5></Link>
                <Link to={this.props.link}><h5>Pattern</h5></Link>
            </div>
        </div>
        <p>{this.props.price}</p>
            </div>
        )
    }
}

export default ShopIcon
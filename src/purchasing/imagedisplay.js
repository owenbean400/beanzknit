import React from 'react';
import './imagedisplay.scss';

class ImageDisplay extends React.Component{

    render(){
        return(
            <div className="display">
                <img className="display-img" src={this.props.image}/>
                <div className="showcase-img-container">
                    <img className="showcase-img" src={this.props.image}/>
                    <img className="showcase-img"/>
                    <img className="showcase-img"/>
                    <img className="showcase-img"/>
                    <img className="showcase-img"/>
                </div>
                <input type="range" className="saturation-slider"/>
            </div>
        )
    }
}

export default ImageDisplay
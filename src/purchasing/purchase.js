import React from 'react';
import ImageDisplay from './imagedisplay.js';
import Description from './description.js';
import './purchase.scss';

class Purchase extends React.Component{

    render(props){
        return(
            <div>
                <main className="puchase-main">
                    <ImageDisplay image={this.props.image}/>
                    <Description title={this.props.title} priceBuy={this.props.priceBuy} pricePattern={this.props.pricePattern} description={this.props.description}/>
                </main>
            </div>
        )
    }
}

export default Purchase
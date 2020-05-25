import React from 'react';
import ColorBox from './colorbox';

class GridBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mouseActive: false
        }
    }

    render(){
        var array = [];
        for(let i = 0; i < this.props.amountWide * this.props.amountHeight; i++){
            array.push(i);
        }
        console.log(this.props.color);
        return (
            array.map((number ) => 
        <ColorBox className='boxes' mouseActivation={this.state.mouseActive} coloring={this.props.color}/>)
        )
        
    }
}

export default GridBox
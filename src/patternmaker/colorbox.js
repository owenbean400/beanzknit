import React from 'react';
import './color.scss';

class ColorBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isColored: false,
            mouseActive: false,
            cssColor1: {
                backgroundColor: this.props.coloring
            },
            cssColor2: {
                backgroundColor: 'white'
            }
        }
        this.Coloring = this.Coloring.bind(this);
    }

    Coloring = () => {
        const currentState = this.state.isColored;
            this.setState ( state => ({
                isColored: !currentState,
                mouseActive: this.state.mouseActive,
                cssColor1: {
                    backgroundColor: this.props.coloring
                },
                cssColor2: {
                    backgroundColor: 'white'
                }
            }));
    }

    render(){
        return(
            <div className={`boxes ${this.state.isColored ? 'colorRed': 'colorWhite'}`} style={this.state.cssColor1} 
            onTouchStart = {this.Coloring}
            onMouseDown = {this.Coloring}
            >
            </div>
        )
    }
}

export default ColorBox
import React from 'react';
import GridBox from './gridbox.js';
import {GithubPicker} from 'react-color';
import './patternmaker.scss';

class PatternMaker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wide: 10,
            hi: 5,
        }
        this.state = {
            wide: 10,
            hi: 5,
            gridCss: {
                display: 'grid',
                justifyContent: 'center',
                gridTemplateRows: `repeat(${this.state.hi}, 50px)`,
                gridTemplateColumns: `repeat(${this.state.wide}, 50px)`
            },
            color: 'orange',
            background: '#fff'
        }
        this.addWidth = this.addWidth.bind(this);
        this.removeWidth = this.removeWidth.bind(this);
        this.addHeight = this.addHeight.bind(this);
        this.removeHeight = this.removeHeight.bind(this);
    }

    addWidth = () => {
        var widthRow = this.state.wide + 1;
        var heightColumn = this.state.hi;
        this.setState ( state => ({
            wide: widthRow,
            hi: heightColumn,
            gridCss: {
                display: 'grid',
                justifyContent: 'center',
                gridTemplateRows: `repeat(${heightColumn}, 50px)`,
                gridTemplateColumns: `repeat(${widthRow}, 50px)`
            },
            color: this.state.color
        }));
    }

    removeWidth = () => {
        var widthRow = this.state.wide - 1;
        var heightColumn = this.state.hi;
        this.setState ( state => ({
            wide: widthRow,
            hi: heightColumn,
            gridCss: {
                display: 'grid',
                justifyContent: 'center',
                gridTemplateRows: `repeat(${heightColumn}, 50px)`,
                gridTemplateColumns: `repeat(${widthRow}, 50px)`
            },
            color: this.state.color
        }));
    }

    addHeight = () => {
        var widthRow = this.state.wide;
        var heightColumn = this.state.hi + 1;
        this.setState ( state => ({
            wide: widthRow,
            hi: heightColumn,
            gridCss: {
                display: 'grid',
                justifyContent: 'center',
                gridTemplateRows: `repeat(${heightColumn}, 50px)`,
                gridTemplateColumns: `repeat(${widthRow}, 50px)`
            },
            color: this.state.color
        }));
    }

    removeHeight = () => {
        var widthRow = this.state.wide;
        var heightColumn = this.state.hi - 1;
        this.setState ( state => ({
            wide: widthRow,
            hi: heightColumn,
            gridCss: {
                display: 'grid',
                justifyContent: 'center',
                gridTemplateRows: `repeat(${heightColumn}, 50px)`,
                gridTemplateColumns: `repeat(${widthRow}, 50px)`
            },
            color: this.state.color
        }));
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };

    render(){

        return( 
            <div>
                <main>
                    <div className="add-subtract-boxes">
                    <p onClick={this.addWidth}>+</p><h1>{this.state.wide}</h1><p onClick={this.removeWidth}>-</p>
                    <p onClick={this.addHeight}>+</p><h1>{this.state.hi}</h1><p onClick={this.removeHeight}>-</p>
                    </div>
                    <GithubPicker className="color-picker"
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }/>
                    <div style={this.state.gridCss}>
                        <GridBox amountWide={this.state.wide} amountHeight={this.state.hi} color={this.state.background}/>
                    </div>
                </main>
            </div>
        )   
    }
}

export default PatternMaker
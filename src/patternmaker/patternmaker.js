import React from 'react';
import GridBox from './gridbox.js';
import { BlockPicker } from 'react-color';
import './patternmaker.scss';

const boxSize = '30px'

class PatternMaker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wide: 5,
            hi: 5,
        }
        this.state = {
            wide: 5,
            hi: 5,
            gridCss: {
                display: 'grid',
                justifyContent: 'center',
                gridTemplateRows: `repeat(${this.state.hi}, ${boxSize})`,
                gridTemplateColumns: `repeat(${this.state.wide}, ${boxSize})`
            },
            color: 'orange',
            background1: '#fff'
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
                gridTemplateRows: `repeat(${heightColumn}, ${boxSize})`,
                gridTemplateColumns: `repeat(${widthRow}, ${boxSize})`
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
                gridTemplateRows: `repeat(${heightColumn}, ${boxSize})`,
                gridTemplateColumns: `repeat(${widthRow}, ${boxSize})`
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
                gridTemplateRows: `repeat(${heightColumn}, ${boxSize})`,
                gridTemplateColumns: `repeat(${widthRow}, ${boxSize})`
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
                gridTemplateRows: `repeat(${heightColumn}, ${boxSize})`,
                gridTemplateColumns: `repeat(${widthRow}, ${boxSize})`
            },
            color: this.state.color
        }));
    }

    handleChangeCompleteOne = (color) => {
        this.setState({ background1: color.hex });
    };

    render(){
        return( 
            <div>
                <main className="pattern-maker-main">
                    <div className="print-title">Owen Bean Pixel Art Creator</div>
                    <div className="creating-pattern-actions">
                        <div className="add-remove-buttons">
                            <h2># of Columns</h2>
                            <p onClick={this.addWidth}>+</p><h1>{this.state.wide}</h1><p onClick={this.removeWidth}>-</p>
                        </div>
                        <div className="color-picker-container">
                            <h2>Color Picker</h2>
                            <BlockPicker className="color-picker"
                                style={{zIndex: '1'}}
                                color={ this.state.background1 }
                                onChangeComplete={ this.handleChangeCompleteOne }
                                triangle="hide"
                                width='300px'
                                colors={[
                                    '#FFFFFF','#C0C0C0', '#808080', '#000000', '#FF0000', '#FFA500','#FFD700',	'#800000', '#FFFF00', '#808000', 
                                    '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'
                                ]}
                                />
                        </div>
                        <div className="add-remove-buttons">
                            <h2># of Rows</h2>
                            <p onClick={this.addHeight}>+</p><h1>{this.state.hi}</h1><p onClick={this.removeHeight}>-</p>
                        </div>
                    </div>
                    <div style={this.state.gridCss}>
                        <GridBox className="gridboxes" amountWide={this.state.wide} amountHeight={this.state.hi} color1={this.state.background1}/>
                    </div>
                </main>
            </div>
        )   
    }
}

export default PatternMaker
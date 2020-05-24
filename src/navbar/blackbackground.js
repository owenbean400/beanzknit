import React from 'react';

class BackDrop extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            css: {
                opacity: props.BackOpacity,
                zIndex: props.BackZIndex,
                display: props.BackDisplay
            },
            onclick: props.hideSidebar
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.BackOpacity !== prevProps.BackOpacity) {
            this.setState( state => ({
                css: {
                    opacity: this.props.BackOpacity,
                    zIndex: this.props.BackZIndex,
                    display: this.props.BackDisplay
                }
            }));
        }
    }


    render(){
        return(
            <div style={this.state.css} onClick={this.state.onclick} className="backdrop">

            </div>
        )
    }
}

export default BackDrop
import React from 'react';

class Cross extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hiding: this.props.hideSide
        }
    }

    render(){
        return(
            <div className="cross-holder" onClick={this.state.hiding}>
                <div className="crossbar" id="rightCross"></div>
                <div className="crossbar" id="leftCross"></div>
            </div>
        )
    }
}

export default Cross
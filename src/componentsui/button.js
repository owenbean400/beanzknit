import React from 'react';
import './button.scss';

class Button extends React.Component{

    render(props){

        return(
            <div>
                <button>{this.props.button}</button>
            </div>
        )
    }
}

export default Button
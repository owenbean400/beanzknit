import React from 'react';

class Hamburger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Style: {
                Box: {
                    display: window.innerWidth > 768 ? 'none' : 'flex',
                }
            },
            clickThis: props.showSidebar
        }
    }

    updateDimensions = () => {
        this.setState( state => ({
            Style: {
                Box: {
                    display: window.innerWidth > 768 ? 'none' : 'flex'
                }
            }
        }))
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

    render() {
        return (
            <div style={this.state.Style.Box} onClick={this.state.clickThis} className="hamburger">
                <div/>
                <div/>
                <div/>
            </div>

        )
    }
}

export default Hamburger
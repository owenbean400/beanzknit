import React from 'react';
import Cross from './cross.js';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            css: {
                    bar: {
                        transform: props.SidebarChange,
                    },
                    li:{
                        transform: this.props.liMove,
                        transition: 'transform 1s ease-out'
                    }
            },
            hiding: this.props.hideSidebar,
            transform: this.props.liMove
        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.SidebarChange !== prevProps.SidebarChange) {
            this.setState( state => ({
                css: {
                    bar: {
                        transform: this.props.SidebarChange
                    },
                    li:{
                        transform: this.props.liMove,
                        transition: 'transform 1s ease-out'
                    }
                }
            }));
        }
      }

        render(){
            return(
                <div style={this.state.css.bar} className="sidebar">
                    <div className="sidebar-header">
                        <Link to="/"><h1>Beanz</h1></Link>
                        <div className="spacer"></div>
                        <Cross hideSide={this.state.hiding}/>
                    </div>
                    <ul>
                        <Link to="/shop"><li style={this.state.css.li}>Shop</li></Link>
                        <Link to="/blog"><li style={this.state.css.li}>Blog</li></Link>
                        <Link to="/about"><li style={this.state.css.li}>About</li></Link>
                    </ul>

                </div>
            )
        }
}
 

export default Sidebar
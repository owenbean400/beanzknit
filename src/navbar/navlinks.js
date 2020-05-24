import React from 'react';
import {Link} from 'react-router-dom';

class NavLinks extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            LinkList: {
                ul: {
                    display: window.innerWidth > 768 ? 'grid' : 'none'
                }
                }
                
            }
        };

    updateDimensions = () => {
        this.setState( state => ({
            LinkList: {
                ul: {
                    display: window.innerWidth > 768 ? 'grid' : 'none'
                }
            }
        }));
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      };
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      };

    render(){
        return(
            <div className="navlinks">
                <ul style={this.state.LinkList.ul}>
                    <Link to="/shop"><li>Shop</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </div>
        )
    }
}


export default NavLinks; 
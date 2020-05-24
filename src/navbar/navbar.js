import React from 'react';
import {Link} from 'react-router-dom';
import NavLinks from './navlinks.js';
import Hamburger from './hamburger.js';
import Sidebar from './sidebar.js';
import BackDrop from './blackbackground';
import './navbar.scss';

class NavBar extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        css: {
            transform: 'translateX(110%)',
            opacity: 0,
            zIndex: -1,
            display: 'none',
            sidebarli: {
              transform: 'translateX(400px)'
            }
        }
      };
      this.SidebarLeave = this.SidebarLeave.bind(this);
      this.SidebarShow = this.SidebarShow.bind(this);
    };

    SidebarShow () {
            this.setState( state => ({
                css: {
                    transform: 'translateX(0)',
                    opacity: 0.5,
                    zIndex: 1,
                    display: 'block',
                    sidebarli: {
                      transform: 'translateX(0)'
                    }
                }
            }));
            
    };

    SidebarLeave () {
        this.setState( state => ({
            css: {
                transform: 'translateX(110%)',
                opacity: 0,
                zIndex: -1,
                display: 'none',
                sidebarli: {
                  transform: 'translateX(400px)'
                }
            }
        }));

    };

    componentDidMount() {
        window.addEventListener('resize', this.SidebarLeave);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.SidebarLeave);
      }
  
    render() {
      return (
        <div className="navbar">
          <Link to="/"><h1>{this.props.logo}</h1></Link>
          <div className="spacer"/>
          <NavLinks />
          <Hamburger showSidebar={this.SidebarShow.bind(this)} />
          <Sidebar  SidebarChange={this.state.css.transform} hideSidebar={this.SidebarLeave.bind(this)} liMove={this.state.css.sidebarli.transform}/>
          <BackDrop BackOpacity={this.state.css.opacity} BackZIndex={this.state.css.zIndex} BackDisplay={this.state.css.display} hideSidebar={this.SidebarLeave.bind(this)}/>
        </div>
      )
    }
  }

  export default NavBar;
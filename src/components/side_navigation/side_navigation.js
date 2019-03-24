import React from 'react';
import './side_navigation.scss';
import { elastic as Menu } from 'react-burger-menu';
import history from '../../router/history';

class SideNavigation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { menuOpen: false };
    }

    handleClick = (path) => {
        this.setState({menuOpen: false});
        switch (path) {
            case 'about': {
                history.push('/about');
                break;
            }
            case 'skills': {
                history.push('/skills');
                break;
            }
            case 'projects': {
                history.push('/');
                break;
            }
            case 'experience': {
                history.push('/experience');
                break;
            }
            case 'contact': {
                window.location.href = "mailto:BrandonNSaunders@gmail.com";
                break;
            }
            default: {
                console.log("None");
                break;
            }
        }
    };
    render()
    {
        return (
            <Menu isOpen={ this.state.menuOpen }>
                <div id="projects" className="menu-item" onClick={this.handleClick.bind(this, 'projects')}>Projects</div>
                <div id="experience" className="menu-item"  onClick={this.handleClick.bind(this, 'experience')}>Experience</div>
                <div id="about" className="menu-item"  onClick={this.handleClick.bind(this, 'about')}>About</div>
                <a id="contact" className="menu-item" href="mailto:BrandonNSaunders@gmail.com">Contact</a>
            </Menu>
        );
    }
}

export default SideNavigation;

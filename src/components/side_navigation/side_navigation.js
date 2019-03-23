import React from 'react';
import {SideNav, Nav} from 'react-sidenav';
import styled from 'styled-components';
import {NavigationContainer as BaseNavigation} from '../../containers/containers';
import history from '../../router/history';

const theme = {
    selectionColor: '#FFF',
    hoverBgColor: '#181b20',
};
const Text = styled.div`
  padding-left: 8px;
`;

const Navigation = styled(BaseNavigation)`
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 240px;
  line-height: 22px;
`;

class SideNavigation extends React.Component
{
    state = { selectedPath: "1" };
    onItemSelection = arg => {
        this.setState({ selectedPath: arg.path });
        console.log("State: " + arg.path);
        switch (arg.path) {
            case "home": {
                history.push('/');
                break;
            }
            case "projects": {
                history.push('/projects');
                break;
            }
            case "experience": {
                history.push('/experience');
                break;
            }
            case "contact": {
                window.location.href = "mailto:BrandonNSaunders@gmail.com";
                break;
            }
            default: {
                break;
            }
        }
    };
    render()
    {
        return (
            <Navigation>
                <SideNav
                    defaultSelectedPath="home"
                    theme={theme}
                    onItemSelection={this.onItemSelection}>
                    <Nav id="home">
                        <Text>Home</Text>
                    </Nav>
                    <Nav id="projects" >
                        <Text>Projects</Text>
                    </Nav>
                    <Nav id="experience" >
                        <Text>Experience</Text>
                    </Nav>
                    <Nav id="contact" >
                        <Text>
                            Contact
                        </Text>
                    </Nav>
                </SideNav>
            </Navigation>
        );
    }
}

export default SideNavigation;

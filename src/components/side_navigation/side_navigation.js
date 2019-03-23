import React from 'react';
import {SideNav, Nav} from 'react-sidenav';
import styled from 'styled-components';
import {NavigationContainer as BaseNavigation} from '../../containers/containers';

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

    render()
    {
        return (
            <Navigation>
                <SideNav
                    defaultSelectedPath="1"
                    theme={theme}
                    onItemSelection={this.onItemSelection}>
                    <Nav id="1">
                        <Text>Home</Text>
                    </Nav>
                    <Nav id="2">
                        <Text href="google.com">Contact</Text>
                    </Nav>
                </SideNav>
            </Navigation>
        );
    }
}

export default SideNavigation;

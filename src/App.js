import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import styled from "styled-components";
import {
    AppContainer as BaseAppContainer,
    BodyContainer as Body
} from "./containers/containers";
import Projects from './pages/projects/projects';
import ProfessionalDetails from './pages/professional_details/professional_details';
import ProfessionalExperience from './pages/professional_experience/professional_experience';
import NotFound from './pages/notfound/notfound';
import PortfolioHeader from './components/portfolio_header/portfolio_header';
import Navigation from './components/side_navigation/side_navigation.js';
import history from './router/history';

const AppContainer = styled(BaseAppContainer)`
`;


class App extends Component
{
    render()
    {
        return (
            <AppContainer>
                <Navigation/>
                <Body class="body-wrapper">
                    <PortfolioHeader/>
                    <HashRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={Projects} />
                            <Route path="/about" component={ProfessionalDetails} />
                            <Route path="/experience" component={ProfessionalExperience} />
                            <Route component={NotFound} />
                        </Switch>
                    </HashRouter>
                </Body>
            </AppContainer>
        );
    }
}


export default App;

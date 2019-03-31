import ReactGA from 'react-ga';
import React, {Component} from 'react';
import {
    Router,
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

function initializeReactGA() {
    ReactGA.initialize('UA-53484838-6');
    ReactGA.pageview('/homepage');
}

initializeReactGA();

const AppContainer = styled(BaseAppContainer)`
`;


class App extends Component
{
    render()
    {
        return (
            <AppContainer id="outer-container">
                <Navigation burgerButtonClassName="menu"/>
                <Body className="body-wrapper" id="page-wrap">
                    <PortfolioHeader/>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={Projects} />
                            <Route path="/about" component={ProfessionalDetails} />
                            <Route path="/experience" component={ProfessionalExperience} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </Body>
            </AppContainer>
        );
    }
}


export default App;

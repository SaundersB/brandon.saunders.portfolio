import React, {Component} from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import styled from "styled-components";
import {
    AppContainer as BaseAppContainer,
    BodyContainer as Body
} from "./containers/containers";
//import "./App.scss";
import ProfessionalDetails from './pages/professional_details/professional_details';
import NotFound from './pages/notfound/notfound';
import Navigation from './components/side_navigation/side_navigation.js';
import Footer from './components/footer/footer.js';

const AppContainer = styled(BaseAppContainer)`
`;

class App extends Component
{
    render()
    {
        return (
            <AppContainer>
                <Navigation/>
                <Body>
                    <Switch>
                        <Route path="/" component={ProfessionalDetails} />
                        <Route component={NotFound} />
                    </Switch>
                </Body>
                <Footer/>
            </AppContainer>
        );
    }
}


export default App;

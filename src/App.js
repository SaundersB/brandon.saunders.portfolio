import React, {Component} from 'react';
import './App.css';
import {
    Route,
    Switch
} from "react-router-dom";
import ProfessionalDetails from './pages/professional_details/professional_details';
import NotFound from './pages/notfound/notfound';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

class App extends Component
{
    render()
    {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={ProfessionalDetails} />
                    <Route component={NotFound} />
                </Switch>
                <Footer/>
            </div>
        );
    }
}


export default App;

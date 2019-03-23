import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import {
    Route,
    HashRouter,
    Switch
} from "react-router-dom";
import App from "./App";
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import NotFound from "./pages/notfound/notfound";
import ProfessionalDetails from "./pages/professional_details/professional_details";
import * as serviceWorker from './serviceWorker';

console.log(process.env.PUBLIC_URL);

const routing = (
    <HashRouter basename="/brandon.saunders.portfolio">
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/professional_details" component={ProfessionalDetails} />
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </div>
    </HashRouter >
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

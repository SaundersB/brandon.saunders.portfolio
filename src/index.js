import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import App from "./App";
import Contact from "./components/contact/contact";
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import NotFound from "./pages/notfound/notfound";
import * as serviceWorker from './serviceWorker';

console.log(process.env.PUBLIC_URL);

const routing = (
    <Router basename={ process.env.PUBLIC_URL }>
        <div >
            <Header />
            <Switch>
                <Route path={ "/"} component={App} />
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

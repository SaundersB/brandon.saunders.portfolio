import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import {
    Route,
    BrowserRouter,
    Switch
} from "react-router-dom";
import App from "./App";
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import NotFound from "./pages/notfound/notfound";
import * as serviceWorker from './serviceWorker';
import {
    createBrowserHistory
} from 'history';

console.log(process.env.PUBLIC_URL);

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

const routing = (
    <BrowserRouter history={history}>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter >
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

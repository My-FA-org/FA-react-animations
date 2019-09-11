import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Landing from './components/landing/landing';
import MyForm from './components/forms/form';
import NotFound from './components/not-found/not-found';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import ThankYou from './components/thank-you/thank-you';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/landing" component={Landing}></Route>
            <Route path="/forms" component={MyForm}></Route>
            <Route path="/thank-you" component={ThankYou}></Route>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

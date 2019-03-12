import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Router>
        <Route render={() =>
            <Provider store={store}>
                <App />
            </Provider>
        }
        />
    </Router>
    , document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

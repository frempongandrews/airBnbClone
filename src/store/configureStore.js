import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "../reducers/index";
import thunk from "redux-thunk";
const middlewares = [thunk];
const reduxDevtoolsExtension= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


export const configureStore = () => {

    const store = createStore(allReducers, {},
    compose(applyMiddleware(...middlewares),
        reduxDevtoolsExtension)
    );

    return store;
};


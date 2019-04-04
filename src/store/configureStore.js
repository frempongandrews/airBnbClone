import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "../reducers/index";
import thunk from "redux-thunk";
const middlewares = [thunk];
const reduxDevtoolsExtension= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const configureStore = () => {

    const store = createStore(allReducers,
        reduxDevtoolsExtension(applyMiddleware(...middlewares))
    );

    return store;
};


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./utils/store";
import {Router} from "react-router";
import history from "./utils/history";

// 참고자료
//https://stackoverflow.com/questions/56707885/browserrouter-vs-router-with-history-push
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
document.getElementById('root')
);

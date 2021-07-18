import history from "./history";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../rootReducer";
import logger from "redux-logger";
import rootSaga from "../rootSaga";

// createStore는 기본적으로 middleware를 thunk를 사용하기 때문에
// thunk를 사용하지 않는다면 다른 미들웨어로 덮어씌워줘야 한다.
const sagaMiddleware = createSagaMiddleware({
    //context는 initialState 같은 개념
    //해당 미들웨어에서 setContext로 다시 내장할 수도 있다.
    context: {history:history}
});

const initialState = {};

const store = configureStore({
    reducer: rootReducer,
    middleware : [sagaMiddleware,logger],
    devTools : true,
    preloadedState: initialState
});

sagaMiddleware.run(rootSaga);

export default store;
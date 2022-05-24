import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "../saga";
import { commentsReducer } from "./comments";
import { postsReducer } from "./posts";
import { usersReducer } from "./users";

const reducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
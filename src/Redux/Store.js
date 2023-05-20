import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxSaga from "redux-saga";
import rdcLearn from "./Reducer/rdcLearn";
import MiddleReSa from "./Saga/MiddleReSa";

const middleware = reduxSaga()

const GlobalState = combineReducers({
    dataManage: rdcLearn
})

const store = createStore(
    GlobalState,
    applyMiddleware(middleware)
)

export default store
middleware.run(MiddleReSa)
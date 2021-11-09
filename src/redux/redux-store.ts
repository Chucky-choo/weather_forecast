import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import weatherReducer, {initialStateType} from "./weather-reducer";
import thunkMiddleware from 'redux-thunk';

export type appStoreType = {
	data: initialStateType
}

const reducer = combineReducers<appStoreType>({
	data: weatherReducer,
})

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store
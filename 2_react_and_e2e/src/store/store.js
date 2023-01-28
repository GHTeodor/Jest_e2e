import counterReducer from "./reducers/counterReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const createReduxStore = (initialState = {/*counter: {value : 10000}*/}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })
}

import { combineReducers } from 'redux';

// import all reducer
import regionReducer from "./region";
import authReducer from "./auth";


const reducers = combineReducers({
    // router: reducerRouter,
    auth: authReducer,
    region: regionReducer
    
});

export default reducers;
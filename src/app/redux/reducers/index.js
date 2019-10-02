import { combineReducers } from 'redux';

// import all reducer
import regionReducer from "./region";
import authReducer from "./auth";
import clusterReducer from "./cluster"


const reducers = combineReducers({
    // router: reducerRouter,
    auth: authReducer,
    region: regionReducer,
    cluster: clusterReducer,
});

export default reducers;
import { combineReducers } from 'redux';

// import all reducer
import regionReducer from "./region";


const reducers = combineReducers({
    // router: reducerRouter,
    // products: productsReducer,
    region: regionReducer
    
});

export default reducers;
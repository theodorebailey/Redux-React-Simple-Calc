import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';

// function configure store from library
// call and pass in an object, with 1 key - the reducers
// store will hold number / todos

export default configureStore({
    // you will only manipulate this when you have a new reducer
    reducer: {
        counter: counterReducer
    },
});
    

// everytime you add a new reducer make sure to add it to store to make available to other components
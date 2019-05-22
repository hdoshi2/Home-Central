// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'

// const initialState = {}

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

// export default rootReducer

import { combineReducers } from "redux";
import { apartmentReducer } from "./apartment";
import { buildingReducer } from "./building";

const rootReducer = combineReducers({ apartmentReducer, buildingReducer });

export default rootReducer;

//I set this store up with a root reducer just in case you need to hold many reducers
import { createStore, applyMiddleware, combineReducers } from "redux";
//promise middleware is wheat allows us to say '_FULFILLED' etc...
//used later in the listReducer
import promiseMiddleware from "redux-promise-middleware";
import listReducer from "./listReducer";
//we create a root Reducer to hold all of our reducers
const rootReducer = combineReducers({
  listReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

//use this code below if you want the redux devtools extension to work
// export default createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//         applyMiddleware(promiseMiddleware)
//       )
// )

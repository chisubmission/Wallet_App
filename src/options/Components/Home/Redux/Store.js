import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import BalanceReducer from "./Reducers/BalanceReducer";

const rootReducers  = combineReducers({
  walletBalance: BalanceReducer
})
const store = createStore(rootReducers, composeWithDevTools())

export default store;
import { createStore } from "redux";
import Reducers from "../reducers/Reducers";
import { combineReducers } from "redux";
import Reducers2 from "../reducers/Reducers2";
import { LanguageReducers } from "../reducers/LanguageReducers";
const rootReducer  = combineReducers({Reducers, Reducers2,LanguageReducers,});
 const store = createStore(rootReducer );
 export default store

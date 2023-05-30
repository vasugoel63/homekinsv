import { createStore } from "redux";
import data_reducer from "./Reducer";
const store = createStore(data_reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
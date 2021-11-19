import { createStore } from "redux";

// create store of each reducer
import rootReducers from "./reducers";

// export store and then it will use in provider component
export default createStore(rootReducers);

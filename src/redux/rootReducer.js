import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "redux/auth/auth.reducers";
import globalReducer from "redux/global/global.reducers";

/*************************************************/

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer
});

/*************************************************/

export default persistReducer(persistConfig, rootReducer);

/*************************************************/

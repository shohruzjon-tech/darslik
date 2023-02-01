import cartSlice from "./cart.slice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root-persistor",
    storage,
    whitelist: ["cart"],
  };

const rootReducer = combineReducers({
  cart: cartSlice,
});

export default persistReducer(persistConfig, rootReducer);

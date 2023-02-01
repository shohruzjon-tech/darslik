import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middlewares = [logger];
// if (process.env.NODE_ENV === "development") {
//   middlewares.push();
// }

export const store = configureStore({
  middleware: middlewares,
  devTools: process.env.NODE_ENV === "development",
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export default { store, persistor };

//import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
//import { loggerMiddleware } from "./middleware/logger";

import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: "root",
//   storage, //shortcut for stor variable as the key name (oklart om det ska vara fuuttar): storage: storage
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// //only use logger in development environment. Filter out booleans so we don't send false as middleware
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

// //Use redux devtools if not in production, otherwise use normal compose from redux
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);

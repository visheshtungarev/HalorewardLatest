import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["auth", "loader"], // which reducer want to store
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const pReducer = persistReducer(persistConfig, reducers);
const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
  // other store enhancers if any
);
const store = createStore(pReducer, enhancer);

const persistor = persistStore(store);

export { persistor, store };

import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "./Router";
import { store, persistor } from "./store";
import ErrorBoundary from "./components/ErrorBoundary";
import "antd/dist/antd.css";
import "./App.css";
function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <Suspense fallback={<h6>loading</h6>}>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </Suspense>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

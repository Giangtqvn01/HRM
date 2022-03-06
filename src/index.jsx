import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import { Provider, useDispatch } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { store, persistor } from "./rootStore";

ReactDOM.render(
  // <Provider store={store}>
  //   <PersistGate persistor={persistor}>
  //     <App />
  //   </PersistGate>
  // </Provider>,
  // document.getElementById("root")
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

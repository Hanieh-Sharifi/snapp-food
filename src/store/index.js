import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import vendors from "./reducer";

const store = configureStore({
  reducer: vendors,
  middleware: [thunk, logger],
});

export default store;

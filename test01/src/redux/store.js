import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
  middleware: () => [thunkMiddleware, loggerMiddleware],
});

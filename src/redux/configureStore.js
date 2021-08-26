import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import { users } from "./features/users";
import thunk from "redux-thunk";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(users, applyMiddleware(thunk, logger));

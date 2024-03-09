import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterSlice.js";
import todoListReducer from "../reducers/TodoListSlice.js";
import favoritesSlice from "../reducers/favoritesSlice .js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
    favList: favoritesSlice,
  },
});

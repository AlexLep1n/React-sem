/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { addFav } from "./reducers/favoritesSlice ";
import { useDispatch, useSelector } from "react-redux";
import FavoritesList from "./components/FavoritesList";
import SagaComp from "./components/SagaComp";

export default function App() {
  return <SagaComp />;
}

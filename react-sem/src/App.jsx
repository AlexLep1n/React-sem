/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { addFav } from "./reducers/favoritesSlice ";
import { useDispatch } from "react-redux";
import FavoritesList from "./components/FavoritesList";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Prod #1",
      description: "Description prod #1",
      price: 41,
    },
    {
      id: 2,
      name: "Prod #2",
      description: "Description prod #2",
      price: 25,
    },
    {
      id: 3,
      name: "Prod #3",
      description: "Description prod #3",
      price: 124,
    },
  ]);
  const dispatch = useDispatch();
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id} style={{ display: "flex", gap: "20px" }}>
            <p>id: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => dispatch(addFav(product))}>
              Add to favorites
            </button>
          </div>
        ))}
      </section>
      <FavoritesList />
    </>
  );
}

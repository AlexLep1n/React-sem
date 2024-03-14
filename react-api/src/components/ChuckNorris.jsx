import { useEffect } from "react";
import { useState } from "react";

export default function ChuckNorris() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(false);

  const url = "https://api.chucknorris.io/jokes/random";

  function clickHander() {
    getCNJokes();
  }

  async function getCNJokes() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      setJoke(result);
    } catch (error) {
      setError(true);
      console.warn(error);
    }
  }

  useEffect(() => {
    getCNJokes();
  }, []);

  return (
    <section>
      {error && (
        <>
          <h1>Error! Request failed.</h1>{" "}
          <button onClick={clickHander}>Retry</button>
        </>
      )}
      {joke && (
        <div key={joke.id}>
          <p>Joke: {joke.value}</p>
          <button onClick={clickHander}>New joke</button>
        </div>
      )}
    </section>
  );
}

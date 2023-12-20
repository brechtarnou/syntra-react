/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Categories from "./Categories";
const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState("");

  const getJoke = () => {
    const base_url = `https://api.chucknorris.io/jokes/random`;
    const url = category ? `${base_url}?category=${category}` : base_url;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  };
  useEffect(() => {
    getJoke();
  }, [category]);

  return (
    <div>
      <Categories setCategory={setCategory} />
      <p>{joke}</p>
      <button onClick={getJoke}>Next joke</button>
    </div>
  );
};

export default Jokes;

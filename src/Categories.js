import { useEffect, useState } from "react";

const Categories = ({ setCategory }) => {
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      {categories.map((category) => {
        return <option value={category}>{category}</option>;
      })}
    </select>
  );
};

export default Categories;

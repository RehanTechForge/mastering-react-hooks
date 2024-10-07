import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
const Meals = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .finally(() => setLoading(false));
  }, []);

  console.log(items);

  // idMeal: "52959";
  // strMeal: "Baked salmon with fennel & tomatoes";
  // strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg";

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div className="items-container">
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <h1>Loading...</h1>
        </div>
      ) : (
        itemslist
      )}
    </div>
  );
};

export default Meals;

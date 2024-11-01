import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { index as indexCocktails } from '../../services/cocktailService';
import { index as indexFood } from '../../services/foodService';
import MyCardCocktail from "../MyCardCocktail/MyCardCocktail";
import MyCardFood from "../MyCardFood/MyCardFood";

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const goToCreateCocktail = () => {
    navigate("/create-cocktail");
  };

  const goToCreateFood = () => {
    navigate("/create-food");
  };

  const [cocktailList, setCocktailList] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const getCocktailList = async () => {
    try {
      const getCocktailList = await indexCocktails();
      setCocktailList(getCocktailList || []); // Ensuring array format
    } catch (error) {
      console.error('Error fetching cocktail list:', error);
      alert("Error fetching cocktail list");
    }
  };

  const getFoodList = async () => {
    try {
      const getFoodList = await indexFood();
      setFoodList(getFoodList || []); // Ensuring array format
    } catch (error) {
      console.error('Error fetching food list:', error);
      alert("Error fetching food list");
    }
  };

  useEffect(() => {
    getCocktailList();
    getFoodList();
  }, []);

  return (
    <main className="text-white">
      <h1>Welcome, {user?.username}</h1>
      <p>Welcome to your personal Oriole dashboard!</p>
      <p>Here, you have the creative freedom to craft custom cocktails and delicious food dishes that showcase your culinary flair.</p>
      <p>Explore your existing creations, update them to perfection, or start something new. With Oriole, every flavor combination is possible!</p>

      <h3 className="mt-5">Your Cocktail List:</h3>
      <div className="my-5 d-flex gap-4" style={{ maxWidth: "90vw" }}>
        {cocktailList && cocktailList.length > 0 ? (
          cocktailList.map((cocktail) => (
            <MyCardCocktail key={cocktail._id} data={cocktail} setCocktailList={setCocktailList} />
          ))
        ) : (
          <p>No cocktails found.</p>
        )}
      </div>

      <h3 className="mt-5">Your Food List:</h3>
      <div className="my-5 d-flex gap-4" style={{ maxWidth: "90vw" }}>
        {foodList && foodList.length > 0 ? (
          foodList.map((food) => (
            <MyCardFood key={food._id} data={food} setFoodList={setFoodList} />
          ))
        ) : (
          <p>No food items found.</p>
        )}
      </div>

      <section className="mt-5">
        <h2>Create a New Cocktail</h2>
        <p>Ready to mix things up? Click below to start crafting a new cocktail with your favorite ingredients and unique twists.</p>
        <button className="btn btn-success" onClick={goToCreateCocktail}>Create Cocktail</button>
      </section>

      <section className="mt-5">
        <h2>Create Food</h2>
        <p>Let your inner chef shine! Use the button below to invent a new dish, blending flavors and techniques that express your style.</p>
        <button className="btn btn-success" onClick={goToCreateFood}>Create Food</button>
      </section>
    </main>
  );
};

export default Dashboard;
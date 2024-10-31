import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {index} from '../../services/cocktailService'
import MyCardCocktail from "../MyCardCocktail/MyCardCocktail";
const Dashboard = ({ user }) => {
  const navigate = useNavigate()

  const goToCreateCocktail = () => {
  navigate("/create-cocktail")
  }
  const [ cocktailList, setCocktailList ] = useState ([])
  const getList=async()=>{
    try{
      const getCocktailList= await index();
      console.log(getCocktailList);
      setCocktailList(getCocktailList)
      
      
    }catch(error) {
    console.log(error);
    alert("errore sulla fetch getList")
    
  }}
  useEffect(() => {
    getList()
    console.log(`qui siamo su useeffect`,cocktailList);
  },[]) 
  return (
    <main className="text-white">
      <h1>Welcome, {user.username}</h1>
      <p>
        Welcome to your personal Oriole dashboard!</p>
      <p> 
        Here, you have the creative freedom to craft custom cocktails and delicious food dishes that showcase your culinary flair.
      </p>
      <p>
        Explore your existing creations, update them to perfection, or start something new. With Oriole, every flavor combination is possible!
      </p>
      <h3 className="mt-5">Your Cocktail List:</h3>
<div className=" my-5 d-flex gap-4 " style={{maxWidth:"90vw"}}>
  
  {cocktailList.length>0&&(cocktailList.map((cocktail)=><MyCardCocktail key={cocktail._id}data={cocktail}/>))}
</div>
      <section className="mt-5">
        <h2>Create a New Cocktail</h2>
        <p>
          Ready to mix things up? Click below to start crafting a new cocktail with your favorite ingredients and unique twists.
        </p>
        <button className="btn btn-success" onClick={goToCreateCocktail}>Create Cocktail</button>
      </section>

      <section className="mt-5">
        <h2>Create Food</h2>
        <p>
          Let your inner chef shine! Use the button below to invent a new dish, blending flavors and techniques that express your style.
        </p>
        <button className="btn btn-success">Create Food </button>
      </section>
    </main>
  );
};

export default Dashboard;
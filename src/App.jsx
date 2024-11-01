import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Page Components
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import { getUser, removeToken } from "../utils/auth";
import SignIn from "./pages/SignIn/SignIn";
import NotFound from "./components/NotFound";
import SignupForm from "./pages/SignUp/SignupForm";
import MyNavBar from "./components/NavBar/MyNavBar";
import CreateCocktail from "./components/CRUD_Cocktail/CreateCocktail";
import EditCocktail from "./components/CRUD_Cocktail/EditCocktail";
import CreateFood from "./components/CRUD_Food/CreateFood";
import EditFood from "./components/CRUD_Food/EditFood";


const App = () => {
  const [user, setUser ] = useState(getUser());

  const navigate = useNavigate(); 

    const handleSignOut = () => {
    removeToken()
    setUser(null)
    navigate('/')
  } 

  return (
    <>
      <MyNavBar handleSignOut={handleSignOut} user={ user }/>
      <Routes>
        {user ? <Route path="/" element={<Dashboard user={user} />} /> : <Route path="/" element={<Landing />} />}
        <Route path="/signIn" element={<SignIn setUser={setUser}/>} />
        <Route path="/signUp" element={<SignupForm  setUser={setUser} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create-cocktail" element={<CreateCocktail/>} />
        <Route path="/edit-cocktail/:id" element={<EditCocktail/>} />
        <Route path="/create-food" element={<CreateFood/>} />
        <Route path="/edit-food/:id" element={<EditFood/>} />
      </Routes>
    </>
  );
};

export default App;

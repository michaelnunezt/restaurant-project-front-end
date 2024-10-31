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
      </Routes>
    </>
  );
};

export default App;

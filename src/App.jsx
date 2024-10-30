import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

//Page Componentsimport SignIn from './pages/SignIn/SignIn';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';

import { getUser, removeToken } from '../utils/auth'
import SignIn from './pages/SignIn/SignIn';


const App = () => {
  const [user, setUser] = useState(getUser());

  const navigate = useNavigate()

  const handleSignOut = () => {
    removeToken()
    setUser(null)
    navigate('/sign')
  }

  return (
    <>
      <Routes>
        { user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
    </>
  );
};


export default App
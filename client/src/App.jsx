import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Create from './pages/Create';
import Entries from './pages/Entries';
import Graphs from './pages/Graphs';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <Routes>
          <Route path="/" element ={ !authState.status ? (<Home/>) : (<Home2/>)}/>
          <Route path="/create" element ={ <Create/>}/>
          <Route path="/entries" element ={ <Entries/>}/>
          <Route path="/graphs" element ={ <Graphs/>}/>
          <Route path="/profile" element ={ <Profile/>}/>
          <Route path="/signin" element ={ <SignIn/>}/>
          <Route path="/signup" element ={ <SignUp/>}/>
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  )
  

}


export default App;

import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Create from './pages/Create';
import Entries from './pages/Entries';
import Graphs from './pages/Graphs';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={ <Home/>}/>
          <Route path="/create" element ={ <Create/>}/>
          <Route path="/entries" element ={ <Entries/>}/>
          <Route path="/graphs" element ={ <Graphs/>}/>
          <Route path="/profile" element ={ <Profile/>}/>
          <Route path="/signin" element ={ <SignIn/>}/>
          <Route path="/signup" element ={ <SignUp/>}/>
        </Routes>
      </Router>
    </div>
  )
  

}


export default App;

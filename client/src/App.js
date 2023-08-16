import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home'
import Create from './pages/Create';
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/create">New Entry</Link>
        <Link to="/">See All</Link>
        <Routes>
          <Route path="/" element ={ <Home/>}/>
          <Route path="/create" element ={ <Create/>}/>
        </Routes>
      </Router>
    </div>
  )
  

}


export default App;

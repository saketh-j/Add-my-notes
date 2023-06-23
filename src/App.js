//import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import Home from './pages/home';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Register' element={<Register/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/' element={<Landing/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;

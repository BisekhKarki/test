import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
     
     <Router>
     <Sidebar/>
      <Routes>
        <Route path='/' element={<Home />}  />
      </Routes>
     </Router>
    </div>
  );
}

export default App;

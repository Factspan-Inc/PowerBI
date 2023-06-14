import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vpleads from './Dashboard/Vpleads'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vpleads" element={<Vpleads />} />
        
      </Routes>
    </div>
  );
}

export default App;

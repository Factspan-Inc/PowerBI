import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vpleads from './Dashboard/Vpleads';
import Form from './Dashboard/FormFeedback'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vpleads" element={<Vpleads />} />
        <Route path="/bookingnumber-feedback/:cellValue" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

import Authentication from './pages/Authentication';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/signin" element={<Authentication/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;

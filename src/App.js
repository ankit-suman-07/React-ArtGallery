import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { Favourites } from "./pages/Favourites";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
      <header className="App-header">
      </header>
      <Home />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./helper/UserContext";
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { Favourites } from "./pages/Favourites";

function App() {

  return (

    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Router>

      </UserProvider>
    </div >

  );
}

export default App;

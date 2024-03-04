import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import StoreLocator from './pages/StoreLocator.js';
import Favorites from './pages/Favorites.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/storelocator" element={<StoreLocator/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

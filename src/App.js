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
import About from './pages/About.js';
import Plushies from './pages/Plushies.js';
import Snacks from './pages/Snacks.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlueBearPlushieItem from './pages/BlueBearPlushieItem.js';
import PockyItem from './pages/PockyItem.js';
import RamuneItem from './pages/RamuneItem.js';

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
          <Route path="/about" element={<About/>}/>
          <Route path="/plushies" element={<Plushies/>}/>
          <Route path="/snacks" element={<Snacks/>}/>
          <Route path="/bluebearplushieitem" element={<BlueBearPlushieItem/>}/>
          <Route path="/pockyitem" element={<PockyItem/>}/>
          <Route path="/ramuneitem" element={<RamuneItem/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

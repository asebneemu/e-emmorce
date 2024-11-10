import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import SepetimPage from './Pages/SepetimPage';
import AboutPage from './Pages/AboutPage';
import Favoriler from './context/SepetimContext/Favoriler';
import ContactPage from './Pages/ContactPage';
import MemberPage from './Pages/MemberPage';
import TeamPage from './Pages/TeamPage';
import PricingPage from "./Pages/PricingPage"
import ProductPage from './Pages/ProductPage';
import UserPage from './Pages/UserPage';
import BestsellerProductPage from './Pages/BestsellerProductPage';
import SignUpPage from './Pages/SignUpPage';
import ShopPageCategories from "./Pages/ShopPageCategories"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign" element={<SignUpPage />} />
        <Route path="/member-page" element={<MemberPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/shop-page" element={<ShopPage />} />
        <Route path="/shop-page/:gender/:category" element={<ShopPageCategories />} />
        <Route path="/sepetim-page" element={<SepetimPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/sepetim-page#favoriler" element={<Favoriler />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/team-page" element={<TeamPage />} />
        <Route path="/pricing-page" element={<PricingPage />} />
        <Route path="/products/:gender/:category/:id" element={<ProductPage />} />
        <Route path="/bestseller-product-page/:id" element={<BestsellerProductPage />} /> {/* ID'ye göre yönlendirme */}
        <Route path="/user-page" element={<UserPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

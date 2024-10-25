import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import SepetimPage from './Pages/SepetimPage';
import AboutPage from './Pages/AboutPage';
import Favoriler from './context/SepetimContext/Favoriler';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import MemberPage from './Pages/MemberPage';
import TeamPage from './Pages/TeamPage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/shop-page" element={<ShopPage />} />
        <Route path="/sepetim-page" element={<SepetimPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/sepetim-page#favoriler" element={<Favoriler />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/member-page" element={<MemberPage />} />
        <Route path="/team-page" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;

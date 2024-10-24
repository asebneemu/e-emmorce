import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ShopPage from './ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/home-page' element={<HomePage />} />
        <Route path="/shop-page" element={<ShopPage />} />
        {/* Diğer rotalar */}
      </Routes>
    </Router>
  );
}

export default App;

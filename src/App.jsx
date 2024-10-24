
import { Provider } from 'react-redux';  // Redux Provider'ı içe aktar
import { store } from './store/store';  // Store'unuzu içe aktar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import SepetimPage from './Pages/SepetimPage';
import AboutPage from './Pages/AboutPage';
import Favoriler from './components/Favoriler';

function App() {
  return (
    <Provider store={store}>  {/* Redux Provider ile tüm uygulamayı sarmalıyoruz */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/sepetim-page" element={<SepetimPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          {/* Favoriler Sayfası */}
          <Route path="/sepetim-page#favoriler" element={<Favoriler />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

import './App.css'
import Bestsellers from './components/Bestsellers';
import Cards from './components/Cards';
import Header from './components/Header';
import IconGrid from './components/IconGrid';
import Navbar from './components/Navbar';
import NavbarLine from './components/NavbarLine';
import RealNavbar from './components/RealNavbar';
import WhatWeDo from "./components/WhatWeDo"
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedPosts from './components/FeaturedPosts';
import SputnikFooter from './components/SputnikFooter';
import ContactSection from './components/ContactSection';
import FooterLastPart from './components/FooterLastPart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarLine />
      <RealNavbar />
      <Header />
      <IconGrid />
      <Cards />
      <Bestsellers />
      <WhatWeDo />
      <FeaturedProducts />
      <FeaturedPosts />
      <SputnikFooter />
      <ContactSection />
      <FooterLastPart />
    </div>
  )
}

export default App;

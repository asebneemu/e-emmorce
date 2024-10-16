import './App.css'
import Cards from './components/Cards';
import Header from './components/Header';
import IconGrid from './components/IconGrid';
import Navbar from './components/Navbar';
import NavbarLine from './components/NavbarLine';
import RealNavbar from './components/RealNavbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarLine />
      <RealNavbar />
      <Header />
      <IconGrid />
      <Cards />
    </div>
  )
}

export default App;

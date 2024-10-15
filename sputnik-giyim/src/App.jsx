import './App.css'
import Header from './components/Header';
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
    </div>
  )
}

export default App;

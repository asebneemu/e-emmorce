import { useEffect } from "react"
import { useSelector } from 'react-redux';
import Navbar from "../components/Navbar";
import NavbarLine from "../components/NavbarLine";
import RealNavbar from "../components/RealNavbar";
import SepetimCart from '../context/SepetimContext/SepetimCart';  // Yeni bileşeni içe aktarıyoruz
import Favoriler from '@/context/SepetimContext/Favoriler';
import SputnikFooter from '@/components/SputnikFooter';
import ContactSection from '@/components/ContactSection';
import FooterLastPart from '@/components/FooterLastPart';

export default function SepetimPage() {
    useEffect(() => {
        // Sayfa yüklendiğinde hash varsa o bölüme kaydır
        if (window.location.hash) {
          const element = document.getElementById(window.location.hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
    
    const cartItems = useSelector((state) => state.cart.cartItems);  // Redux'tan sepetteki ürünleri al

    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <SepetimCart cartItems={cartItems} />
            <div id="favoriler">
              <Favoriler />
            </div>
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
        </div>
    );
}

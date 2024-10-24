
import { useSelector } from 'react-redux';
import Navbar from "../components/Navbar";
import NavbarLine from "../components/NavbarLine";
import RealNavbar from "../components/RealNavbar";
import SepetimCart from '../components/SepetimCart';  // Yeni bileşeni içe aktarıyoruz
import Favoriler from '@/components/Favoriler';
import SputnikFooter from '@/components/SputnikFooter';
import ContactSection from '@/components/ContactSection';
import FooterLastPart from '@/components/FooterLastPart';

export default function SepetimPage() {
    const cartItems = useSelector((state) => state.cart.cartItems);  // Redux'tan sepetteki ürünleri al

    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />

            {/* SepetimCart bileşeni */}
            <SepetimCart cartItems={cartItems} />
            <Favoriler />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
        </div>
    );
}

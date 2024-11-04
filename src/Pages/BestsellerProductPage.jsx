import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SputnikFooter from "@/components/SputnikFooter";
import BestsellerProduct from "@/context/HomeContext/BestsellerProduct";
import { useParams } from 'react-router-dom';
import { bestsellersData } from '../data';
import ProductDetail from "@/context/ProductContext/ProductDetail";

export default function BestsellerProductPage() {
    const { id } = useParams(); // URL'den id al
    const product = bestsellersData.find(item => item.id === parseInt(id)); // Ürünü bul

    
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <BestsellerProduct product={product} /> {/* BestsellerProduct bileşenini çağır */}
            <ProductDetail />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    );
}

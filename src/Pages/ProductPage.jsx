import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import { useParams } from 'react-router-dom';
import { shopBestsellersData, shopBestsellersElbiseData, shopBestsellersCantaData, shopBestsellersTisortData, shopBestsellersPantalonData } from '../data';
import Product from "../context/ProductContext/Product";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import ProductDetail from "@/context/ProductContext/ProductDetail";
import Bestsellers from "@/context/HomeContext/Bestsellers";

export default function ProductPage() {
    const { category, id } = useParams();

    // Kategoriye göre doğru veri setini seç
    let data;
    switch (category) {
        case "elbise":
            data = shopBestsellersElbiseData;
            break;
        case "canta":
            data = shopBestsellersCantaData;
            break;
        case "tisort":
            data = shopBestsellersTisortData;
            break;
        case "pantalon":
            data = shopBestsellersPantalonData;
            break;
        default:
            data = shopBestsellersData;
            break;
    }

    // İlgili veri setinden ürünü bul
    const product = data.find((item) => item.id === parseInt(id));

    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <Product product={product} />
            <ProductDetail />
            <Bestsellers />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    );
}

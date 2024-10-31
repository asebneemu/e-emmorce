import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import { useParams } from 'react-router-dom';
import { shopBestsellersData } from '../data';
import Product from "../context/ProductContext/Product"
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import ProductDetail from "@/context/ProductContext/ProductDetail";
import Bestsellers from "@/context/HomeContext/Bestsellers";

export default function ProductPage() {
    const { id } = useParams();
    const product = shopBestsellersData.find((item) => item.id === parseInt(id));
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
    )
}
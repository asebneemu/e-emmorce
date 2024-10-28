import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import { useParams } from 'react-router-dom';
import { shopBestsellersData } from '../data';
import Product from "../context/ProductContext/Product"
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function ProductPage() {
    const { id } = useParams();
    const product = shopBestsellersData.find((item) => item.id === parseInt(id));
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <Product product={product} />
            <ScrollToTopButton />
        </div>
    )
}
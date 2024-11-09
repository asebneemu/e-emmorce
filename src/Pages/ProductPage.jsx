import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import { useParams } from 'react-router-dom';
import {
    rastgeleData,
    shopBestsellersEtekData,
    shopBestsellersElbiseData,
    shopBestsellersCantaData,
    shopBestsellersTakiData,
    shopBestsellersIcGiyimData,
    shopBestsellersAyakkabiData,
    shopBestsellersTisortData,
    shopBestsellersPantalonData,
    shopBestsellersCeketData,
    shopBestsellersGomlekData,
    shopBestsellersTakimData,
    shopBestsellersKazakData,
    shopBestsellersErkekAyakkabiData
} from '../data';
import Product from "../context/ProductContext/Product";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";

export default function ProductPage() {
    const { gender, category, id } = useParams();

    // Cinsiyet ve kategoriye göre veri seçimi
    let data;
    if (gender === "kadın") {
        switch (category) {
            case "etek":
                data = shopBestsellersEtekData;
                break;
            case "elbise":
                data = shopBestsellersElbiseData;
                break;
            case "canta":
                data = shopBestsellersCantaData;
                break;
            case "taki":
                data = shopBestsellersTakiData;
                break;
            case "icgiyim":
                data = shopBestsellersIcGiyimData;
                break;
            case "ayakkabi":
                data = shopBestsellersAyakkabiData;
                break;
            case "tisort":
                data = shopBestsellersTisortData;
                break;
            case "pantalon":
                data = shopBestsellersPantalonData;
                break;
            default:
                data = rastgeleData;
                break;
        }
    } else if (gender === "erkek") {
        switch (category) {
            case "ceket":
                data = shopBestsellersCeketData;
                break;
            case "gomlek":
                data = shopBestsellersGomlekData;
                break;
            case "takim":
                data = shopBestsellersTakimData;
                break;
            case "kazak":
                data = shopBestsellersKazakData;
                break;
            case "ayakkabi":
                data = shopBestsellersErkekAyakkabiData;
                break;
            default:
                data = rastgeleData;
                break;
        }
    } else {
        data = rastgeleData;
    }

    // İlgili veri setinden ürünü bul
    const product = data.find((item) => item.id === parseInt(id, 10));

    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <Product product={product} />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    );
}

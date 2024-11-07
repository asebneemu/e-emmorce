import { useState } from 'react';
import ByChotles from '../context/ShopContext/ByChotles';
import IconGrid from '../components/IconGrid';
import Navbar from '../components/Navbar';
import NavbarLine from '../components/NavbarLine';
import RealNavbar from '../components/RealNavbar';
import SputnikFooter from '../components/SputnikFooter';
import ContactSection from '../components/ContactSection';
import FooterLastPart from '../components/FooterLastPart';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ShopBestsellers from '../context/ShopContext/ShopBestsellers';
import { 
    shopBestsellersElbiseData, 
    shopBestsellersCantaData, 
    shopBestsellersTisortData, 
    shopBestsellersPantalonData 
} from '../data';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("elbise");

    // Kategoriye göre gösterilecek veri setini seçiyoruz
    const getSelectedData = () => {
        switch (selectedCategory) {
            case "elbise":
                return shopBestsellersElbiseData;
            case "canta":
                return shopBestsellersCantaData;
            case "tisort":
                return shopBestsellersTisortData;
            case "pantalon":
                return shopBestsellersPantalonData;
            default:
                return shopBestsellersElbiseData;
        }
    };

    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            {/* Kategoriyi değiştiren ByChotles bileşeni */}
            <ByChotles setSelectedCategory={setSelectedCategory} />
            {/* Seçili kategorinin verisini gösteren ShopBestsellers bileşeni */}
            <ShopBestsellers data={getSelectedData()} />
            <IconGrid />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    );
}

import { useState, useEffect } from 'react';
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
    // İlk başta localStorage'dan değer alıyoruz, yoksa 'elbise' kategorisine ayarlıyoruz
    const [selectedCategory, setSelectedCategory] = useState(() => {
        return localStorage.getItem('selectedCategory') || 'elbise';
    });

    // selectedCategory değiştiğinde localStorage'a kaydediyoruz
    useEffect(() => {
        localStorage.setItem('selectedCategory', selectedCategory);
    }, [selectedCategory]);

    // Seçilen kategoriye göre doğru veri setini seçiyoruz
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
            <ByChotles
                setSelectedCategory={setSelectedCategory}
                elbiseData={shopBestsellersElbiseData}
                cantaData={shopBestsellersCantaData}
                tisortData={shopBestsellersTisortData}
                pantalonData={shopBestsellersPantalonData}
            />
            {/* Seçili kategoriye göre veri ve kategori gönderiliyor */}
            <ShopBestsellers category={selectedCategory} data={getSelectedData()} />
            <IconGrid />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    );
}

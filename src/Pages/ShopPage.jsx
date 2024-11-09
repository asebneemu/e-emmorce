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
    shopBestsellersErkekAyakkabiData,
    rastgeleData // Rastgele veri seti
} from '../data';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState('rastgele'); // Varsayılan rastgele

    // Seçilen kategori her değiştiğinde localStorage'a kaydediyoruz
    useEffect(() => {
        if (selectedCategory !== 'rastgele') {
            localStorage.setItem('selectedCategory', selectedCategory);
        }
    }, [selectedCategory]);

    // Seçilen kategoriye göre doğru veri setini seçiyoruz
    const getSelectedData = () => {
        switch (selectedCategory) {
            // Kadın kategorileri
            case "etek":
                return shopBestsellersEtekData;
            case "elbise":
                return shopBestsellersElbiseData;
            case "canta":
                return shopBestsellersCantaData;
            case "taki":
                return shopBestsellersTakiData;
            case "icgiyim":
                return shopBestsellersIcGiyimData;
            case "ayakkabi":
                return shopBestsellersAyakkabiData;
            case "tisort":
                return shopBestsellersTisortData;
            case "pantalon":
                return shopBestsellersPantalonData;

            // Erkek kategorileri
            case "ceket":
                return shopBestsellersCeketData;
            case "gomlek":
                return shopBestsellersGomlekData;
            case "takim":
                return shopBestsellersTakimData;
            case "kazak":
                return shopBestsellersKazakData;
            case "erkekAyakkabi":
                return shopBestsellersErkekAyakkabiData;

            // Varsayılan veri olarak rastgeleData döndür
            default:
                return rastgeleData;
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

                etekData={shopBestsellersEtekData}
                takiData={shopBestsellersTakiData}
                icgiyimData={shopBestsellersIcGiyimData}
                ayakkabiData={shopBestsellersAyakkabiData}

                ceketData={shopBestsellersCeketData}
                gomlekData={shopBestsellersGomlekData}
                takimData={shopBestsellersTakimData}
                kazakData={shopBestsellersKazakData}
                erkekAyakkabiData={shopBestsellersErkekAyakkabiData}
                rastgeleData={rastgeleData}
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

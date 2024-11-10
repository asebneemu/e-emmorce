import { useState, useEffect } from 'react';
import ByChotles from '../context/ShopContext/ByChotles';
import ShopBestsellers from '../context/ShopContext/ShopBestsellers';
import IconGrid from '@/components/IconGrid';
import SputnikFooter from '@/components/SputnikFooter';
import ContactSection from '@/components/ContactSection';
import FooterLastPart from '@/components/FooterLastPart';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Navbar from '@/components/Navbar';
import NavbarLine from '@/components/NavbarLine';
import RealNavbar from '@/components/RealNavbar';
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
import { useParams } from 'react-router-dom';
// Diğer importlar...

export default function ShopPage() {
    const { gender, category } = useParams();
    const [selectedCategory, setSelectedCategory] = useState('rastgele'); // Varsayılan olarak rastgele
    const [selectedGender, setSelectedGender] = useState('kadın'); // Varsayılan olarak kadın

    // Seçilen kategori değiştiğinde localStorage’a kaydediyoruz
    useEffect(() => {
        if (selectedCategory !== 'rastgele') {
            localStorage.setItem('selectedCategory', selectedCategory);
        }
    }, [selectedCategory]);

    

    // Seçilen kategoriye göre veri setini döndür
    const getSelectedData = () => {
        if (selectedGender === "kadın") {
            switch (selectedCategory) {
                case "etek": return shopBestsellersEtekData;
                case "elbise": return shopBestsellersElbiseData;
                case "canta": return shopBestsellersCantaData;
                case "taki": return shopBestsellersTakiData;
                case "icgiyim": return shopBestsellersIcGiyimData;
                case "ayakkabi": return shopBestsellersAyakkabiData;
                case "tisort": return shopBestsellersTisortData;
                case "pantalon": return shopBestsellersPantalonData;
                default: return rastgeleData;
            }
        } else if (selectedGender === "erkek") {
            switch (selectedCategory) {
                case "ceket": return shopBestsellersCeketData;
                case "gomlek": return shopBestsellersGomlekData;
                case "takim": return shopBestsellersTakimData;
                case "kazak": return shopBestsellersKazakData;
                case "ayakkabi": return shopBestsellersErkekAyakkabiData;
                default: return rastgeleData;
            }
        } else {
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
                setSelectedGender={setSelectedGender} // Eklenen prop
                selectedGender={selectedGender} // Eklenen prop
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
            <ShopBestsellers
                gender={selectedGender} // Eklenen prop
                category={selectedCategory}
                data={getSelectedData()}
            />
            <IconGrid />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    );
}

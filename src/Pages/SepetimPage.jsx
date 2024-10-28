// src/pages/SepetimPage.js

import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from "react-toastify";  // Toastify importları
import "react-toastify/dist/ReactToastify.css";  // Toastify stillerini ekleyin
import Navbar from "../components/Navbar";
import NavbarLine from "../components/NavbarLine";
import RealNavbar from "../components/RealNavbar";
import SepetimCart from '../context/SepetimContext/SepetimCart';
import Favoriler from '@/context/SepetimContext/Favoriler';
import SputnikFooter from '@/components/SputnikFooter';
import ContactSection from '@/components/ContactSection';
import FooterLastPart from '@/components/FooterLastPart';
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function SepetimPage() {
    useEffect(() => {
        // Sayfa yüklenme kontrolü ve hata mesajı için async işlev
        const loadPage = async () => {
            try {
                // Burada bir hata olup olmadığını kontrol edebiliriz
                toast.info("Alışveriş Seni Çağırıyor!", {
                    position: "top-center",
                    autoClose: 3000,
                });
                
                // Sayfa yüklendiğinde hash varsa o bölüme kaydır
                if (window.location.hash) {
                    const element = document.getElementById(window.location.hash.substring(1));
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            } catch (error) {
                // Hata durumunda kullanıcıya mesaj göster
                toast.error("Şimdilik Hizmet Veremiyoruz, Üzgünüz!", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        };

        loadPage();
    }, []);
    
    const cartItems = useSelector((state) => state.cart.cartItems);  // Redux'tan sepetteki ürünleri al

    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <SepetimCart cartItems={cartItems} />
            <div id="favoriler">
                <Favoriler />
            </div>
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
            <ToastContainer /> {/* Toast mesajlarını göstermek için */}
        </div>
    );
}

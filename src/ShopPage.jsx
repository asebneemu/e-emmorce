


import Bestsellers from "./components/Bestsellers";
import ByChotles from "./components/ByChotles";
import ContactSection from "./components/ContactSection";
import FooterLastPart from "./components/FooterLastPart";
import IconGrid from "./components/IconGrid";
import Navbar from "./components/Navbar";
import NavbarLine from "./components/NavbarLine";
import RealNavbar from "./components/RealNavbar";
import SputnikFooter from "./components/SputnikFooter";


export default function ShopPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <ByChotles />
            <Bestsellers />
            <IconGrid />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
        </div>
    )
}
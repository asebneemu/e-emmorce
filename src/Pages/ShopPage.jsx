import ShopBestsellers from "../context/ShopContext/ShopBestsellers";
import ByChotles from "../context/ShopContext/ByChotles";
import ContactSection from "../components/ContactSection";
import FooterLastPart from "../components/FooterLastPart";
import IconGrid from "../components/IconGrid";
import Navbar from "../components/Navbar";
import NavbarLine from "../components/NavbarLine";
import RealNavbar from "../components/RealNavbar";
import SputnikFooter from "../components/SputnikFooter";


export default function ShopPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <ByChotles />
            <ShopBestsellers />
            <IconGrid />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
        </div>
    )
}
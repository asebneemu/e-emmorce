import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SputnikFooter from "@/components/SputnikFooter";
import PricingPlans from "@/context/PricingContext/PricingPlans";

export default function PricingPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <PricingPlans />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    )
}
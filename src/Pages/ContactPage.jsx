import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SputnikFooter from "@/components/SputnikFooter";
import ContactPart from "@/context/ContactContext/ContactPart";

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <ContactPart />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    )
}
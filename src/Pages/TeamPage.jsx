import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import TeamSection from "@/components/TeamSection";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import RealNavbar from "@/components/RealNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function TeamPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <TeamSection />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
            <ScrollToTopButton />
        </div>
    )
}
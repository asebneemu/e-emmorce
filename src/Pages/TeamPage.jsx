import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import OtherNavbar from "../context/AboutContext/OtherNavbar"
import TeamSection from "@/components/TeamSection";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";

export default function TeamPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <OtherNavbar />
            <TeamSection />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
        </div>
    )
}
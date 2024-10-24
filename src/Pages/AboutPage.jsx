import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import OtherNavbar from "../components/OtherNavbar"
import AboutHeader from "@/components/AboutHeader";
import AboutText from "@/components/AboutText";
import DataAboutPark from "@/components/DataAboutPark";
import AboutVideo from "@/components/AboutVideo";
import TeamSection from "@/components/TeamSection";
import CenteredText from "@/components/CenteredText";
import IconGrid from "@/components/IconGrid";
import TwoColumnSection from "@/components/TwoColumnSection";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";


export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <OtherNavbar />
            <AboutHeader />
            <AboutText />
            <DataAboutPark />
            <AboutVideo />
            <TeamSection />
            <CenteredText />
            <IconGrid />
            <TwoColumnSection />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
        </div>
    )
}
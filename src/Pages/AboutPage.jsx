import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import AboutHeader from "@/context/AboutContext/AboutHeader";
import AboutText from "@/context/AboutContext/AboutText";
import DataAboutPark from "@/context/AboutContext/DataAboutPark";
import AboutVideo from "@/context/AboutContext/AboutVideo";
import TeamSection from "@/components/TeamSection";
import CenteredText from "@/context/AboutContext/CenteredText";
import IconGrid from "@/components/IconGrid";
import TwoColumnSection from "@/context/AboutContext/TwoColumnSection";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import RealNavbar from "@/components/RealNavbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";


export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
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
            <ScrollToTopButton />
        </div>
    )
}
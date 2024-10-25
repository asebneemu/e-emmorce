import Navbar from "@/components/Navbar";
import NavbarLine from "@/components/NavbarLine";
import OtherNavbar from "../context/AboutContext/OtherNavbar"
import TeamSection from "@/components/TeamSection";

export default function TeamPage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <OtherNavbar />
            <TeamSection />
        </div>
    )
}
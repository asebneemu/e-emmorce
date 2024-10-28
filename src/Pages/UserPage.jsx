// src/pages/UserPage.js


import Navbar from "@/components/Navbar";
import Profile from "../context/UserContext/Profile"
import NavbarLine from "@/components/NavbarLine";
import RealNavbar from "@/components/RealNavbar";
import SputnikFooter from "@/components/SputnikFooter";
import ContactSection from "@/components/ContactSection";
import FooterLastPart from "@/components/FooterLastPart";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <NavbarLine />
      <RealNavbar />
      <Profile />
      <SputnikFooter />
      <ContactSection />
      <FooterLastPart />
      <ScrollToTopButton />
    </div>
  );
};

export default UserPage;

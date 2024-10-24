

import Bestsellers from "../components/Bestsellers";
import Cards from "../components/Cards";
import ContactSection from "../components/ContactSection";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import FooterLastPart from "../components/FooterLastPart";
import Header from "../components/Header";
import IconGrid from "../components/IconGrid";
import Navbar from "../components/Navbar";
import NavbarLine from "../components/NavbarLine";
import RealNavbar from "../components/RealNavbar";
import SputnikFooter from "../components/SputnikFooter";
import WhatWeDo from "../components/WhatWeDo";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <NavbarLine />
            <RealNavbar />
            <Header />
            <IconGrid />
            <Cards />
            <Bestsellers />
            <WhatWeDo />
            <FeaturedProducts />
            <FeaturedPosts />
            <SputnikFooter />
            <ContactSection />
            <FooterLastPart />
        </div>
    )




}
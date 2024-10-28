import React, { useEffect, useState } from "react";
import Bestsellers from "../context/HomeContext/Bestsellers";
import Cards from "../context/HomeContext/Cards";
import ContactSection from "../components/ContactSection";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts2 from "../components/FeaturedProducts2";
import FooterLastPart from "../components/FooterLastPart";
import Header from "../components/Header";
import IconGrid from "../components/IconGrid";
import Navbar from "../components/Navbar";
import NavbarLine from "../components/NavbarLine";
import RealNavbar from "../components/RealNavbar";
import SputnikFooter from "../components/SputnikFooter";
import WhatWeDo from "../context/HomeContext/WhatWeDo";
import User from "../components/User"; // User bileşenini içe aktarın
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
      <FeaturedProducts2 />
      <FeaturedPosts />
      <SputnikFooter />
      <ContactSection />
      <FooterLastPart />
      <ScrollToTopButton />
    </div>
  );
}

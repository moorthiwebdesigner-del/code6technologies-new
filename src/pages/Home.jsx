import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import HomeIntro from "../components/HomeIntro";
import HomeServices from "../components/HomeServices";
import SelectedWork from "../components/SelectedWork";
import HomeTechnologies from "../components/HomeTechnologies";
import WhyCode6 from "../components/WhyCode6";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


export default function Home() {

  return (
    <main className="home-page">
<Hero />
<HomeIntro />
<HomeServices />
<SelectedWork />
<HomeTechnologies />
<WhyCode6 />
<Testimonials />
<CTA />
<Footer />
    </main>
  );
}
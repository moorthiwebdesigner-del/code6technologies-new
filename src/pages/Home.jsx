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
import SEO from "../components/SEO";


export default function Home() {

  return (
    <>
  <SEO
  title="Code6 Technologies | Digital Solutions & Experiences"
  description="Code6 Technologies builds modern websites, mobile applications and digital solutions that help businesses grow and create meaningful digital experiences."
/>
    <main className="home-page">
<Hero />
<HomeIntro />
<HomeServices />
<SelectedWork />
<HomeTechnologies />
<WhyCode6 />
<Testimonials />
<CTA />
    </main>
   </> 
  );
}
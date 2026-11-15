import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Specialties from "@/components/sections/Specialties";
import FeaturedStories from "@/components/sections/FeaturedStories";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Specialties />
        <FeaturedStories />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

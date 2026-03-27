import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Practice from "./components/Practice";
import InfoCards from "./components/InfoCards";
import Testimonial from "./components/Testimonial";
import CTAHero from "./components/CTAHero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Practice />
        <InfoCards />
        <Testimonial />
        <CTAHero />
      </main>
      <Footer />
    </>
  );
}

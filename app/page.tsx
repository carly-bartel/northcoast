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
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FadeIn><Marquee /></FadeIn>
        <FadeIn><About /></FadeIn>
        <FadeIn><Services /></FadeIn>
        <FadeIn><Practice /></FadeIn>
        <FadeIn><InfoCards /></FadeIn>
        <FadeIn><Testimonial /></FadeIn>
        <FadeIn><CTAHero /></FadeIn>
      </main>
      <Footer />
    </>
  );
}

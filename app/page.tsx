import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Contact } from "@/components/sections/contact";
import { TrustBar } from "@/components/trust-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Products />
        <AboutTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

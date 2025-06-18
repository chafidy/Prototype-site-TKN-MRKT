
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SeoPitch from "@/components/SeoPitch";
import Company from "@/components/Company";
import Services from "@/components/Services";
import Domains from "@/components/Domains";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <SeoPitch />
      <Company />
      <div id="services">
        <Services />
      </div>
      <div id="domains">
        <Domains />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

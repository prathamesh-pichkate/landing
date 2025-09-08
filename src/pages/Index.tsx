import Header from "@/components/Header";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-16">
        <AnnouncementBanner
          title="Codelight 2.0 is coming back."
          subtitle="Stay tuned!"
          ctaLabel={undefined}
          ctaHref={undefined}
          secondaryCtaLabel={undefined}
          secondaryCtaHref={undefined}
          storageKey="announcement:codelight3"
        />
      </div>
      <Hero />
      <About />
      <Events />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

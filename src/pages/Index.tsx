import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Discord from "@/components/Discord";
import ServerEditions from "@/components/ServerEditions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Discord />
        <ServerEditions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

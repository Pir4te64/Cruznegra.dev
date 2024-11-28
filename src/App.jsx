import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import ContacSection from "./components/US/ContacSection";
import SectionBellow from "./components/US/SectionBelow";
import SectionUs from "./components/US/SectionUs";
import ServicesSection from "./components/US/ServicesSection";
import Projects from "./components/Works/Projects";

function App() {
  return (
    <>
      <Navbar />
      <SectionUs />
      <ServicesSection />
      <Projects />
      <SectionBellow />
      <ContacSection />
      <Clients />
      <Footer />
    </>
  );
}

export default App;

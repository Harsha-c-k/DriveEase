import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import CarList from "@/components/CarList";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <SearchBar />
      <CarList />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
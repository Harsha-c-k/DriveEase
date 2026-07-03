import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <SearchBar />
      <Footer />
    </main>
  );
}
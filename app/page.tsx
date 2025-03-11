import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-deep-purple text-white overflow-hidden pt-16">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
    </main>
  );
}

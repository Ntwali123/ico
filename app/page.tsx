import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhatIsICO from "@/components/what-is-ico";
export default function Home() {
  return (
    <main className="min-h-screen bg-deep-purple text-white overflow-hidden pt-16">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="what-is-ico">
        <WhatIsICO />
      </section>
    </main>
  );
}

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhatIsIco from "@/components/what-is-ico";
import WhyChooseToken from "@/components/why-choose-token";
import TokenAllocation from "@/components/token-allocation";
import Roadmap from "@/components/roadmap";
import TokenDetails from "@/components/token-details";
import ExecutiveTeam from "@/components/executive-team";
import Faq from "@/components/faq";
import Documents from "@/components/documents";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-purple text-white overflow-hidden pt-16">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="what-is-ico">
        <WhatIsIco />
      </section>
      <section id="why-choose">
        <WhyChooseToken />
      </section>
      <section id="token-allocation">
        <TokenAllocation />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="token-details">
        <TokenDetails />
      </section>
      <section id="executive-team">
        <ExecutiveTeam />
      </section>
      <section id="team">
        <ExecutiveTeam />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="documents">
        <Documents />
      </section>
    </main>
  );
}

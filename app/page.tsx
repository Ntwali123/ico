import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import WhatIsIco from "@/components/what-is-ico"
import WhyChooseToken from "@/components/why-choose-token"


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
      
    </main>
  )
}


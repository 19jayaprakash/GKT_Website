"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Spotlight from "./Components/Spotlight/Spotlight";
import ExpertiseScroll from "./Components/Our_expertise/Our_expertise";
import Header from "./Components/Header/Header";
import Network from "./Components/Our_network/Network";
import Clients from "./Components/Our_clients/Clients";
import Footer from "./Components/Footer/Footer";
import Prolearn from './Components/Prolearn/Prolearn'
import { useState, useEffect, useRef } from "react";
import Newsletter from "./Components/NewsLetter/NewsLetter";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 5;
      const sections = [
        { name: "home", ref: homeRef },
        { name: "expertise", ref: expertiseRef },
        { name: "network", ref: networkRef },
        { name: "clients", ref: clientsRef },
      ];

      let newActiveSection = "home";

      sections.forEach(({ name, ref }) => {
        const element = ref.current;
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            newActiveSection = name;
          }
        }
      });

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <>
      <Header activeSection={activeSection} />
      <ParallaxProvider>
        <div className="font-[family-name:var(--font-poppins)]">
          <div className="sticky top-0 z-20 min-h-screen" ref={homeRef}>
            <Spotlight />
          </div>
          <div className="h-[10vh]" />
          <div className="relative z-30 w-full">
            <div ref={expertiseRef}>
              <ExpertiseScroll />
            </div>
            <div>
              <Prolearn/>
            </div>
            <div ref={networkRef}>
              <Network />
            </div>
            <div ref={clientsRef} >
              <Clients />
            </div>
            <div >
              <Newsletter/>
            </div>
          </div>
        </div>
      </ParallaxProvider>
      <Footer />
    </>
  );
}

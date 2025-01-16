"use client";
import About from "@/app/About/page";
import Footer from "@/app/Footer/page";
import Hero from "@/app/Hero/page";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/app/Projects/page";
import Services from "@/app/Services/page";
import Skills from "@/app/Skills/page";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    try {
      // Inicializa AOS apenas após a montagem do componente
      if (typeof window !== 'undefined') {
        AOS.init({
          disable: false,
          startEvent: 'DOMContentLoaded',
          duration: 1000,
          once: true,
        });
      }
    } catch (err) {
      console.error('Erro ao inicializar AOS:', err);
      setError('Erro ao carregar animações');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Componente de fallback para erros
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121121]">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">Ops! Algo deu errado</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121121]">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
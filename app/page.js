"use client";

import { useEffect, useState } from "react";
import Services from "./_components/Services";
import Header from "./_components/Header";
import Form from "./_components/Form";
import Discover from "./_components/Discover";
import ProductCard from "./_components/ProductCard";
import FeatureCard from "./_components/FeatureCard";
import Grow from "./_components/Grow";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Products from "./_components/Products";
import FeatureContainer from "./_components/FeatureContainer";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 py-10">
        <div className="text-gray-900 dark:text-white  flex flex-col md:flex-row items-center justify-center h-screen px-4 md:px-0">
          <Discover />
          <Form />
        </div>
        <Services />

        {/* Products Section */}
        <section className="w-full max-w-6xl mb-10">
          <Products />
        </section>

        {/* Features Section */}
        <section className="w-full max-w-6xl mb-10">
          <FeatureContainer />
        </section>

        {/* Prop Firm Section */}
        <section>
          <Grow />
        </section>

        <section>
          <Features />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-950">
        <Footer />
      </footer>
    </div>
  );
}

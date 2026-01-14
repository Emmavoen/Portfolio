import { useState, useEffect } from "react";
import HeroSection from "./_components/hero";
import AboutSection from "./_components/about";
import SkillsSection from "./_components/skills";
import ProjectsSection from "./_components/projects";
import Footer from "./_components/footer";
import ExperienceSection from "./_components/experience";
import ContactSection from "./_components/contact";
import Header from "./_components/header";
import { ThemeContext } from "@/components/ui/themeContext";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen bg-white dark:bg-gray-800 transition-colors duration-300">
        <Header
          activeSection={activeSection}
          setActiveSection={scrollToSection}
        />
        <HeroSection setActiveSection={scrollToSection} />
        <AboutSection setActiveSection={scrollToSection} />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};
export default Portfolio;

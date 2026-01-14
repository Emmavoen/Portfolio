import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { LucideGithub, LucideLinkedin } from "@/components/icons";
import { assets } from "@/assets/assets";

const HeroSection = ({
  setActiveSection,
}: {
  setActiveSection: (sectionId: string) => void;
}) => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center mt-20 sm:mt-18 px-6 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${assets.heroImg})`,
      }}
    >
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

      <div className="text-center max-w-4xl  mx-auto relative z-10">
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          EE
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
          Emmanuel Eguavoen
        </h1>

        <div className="text-2xl md:text-3xl text-blue-300 mb-8 font-light min-h-[1.5em]">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforming ideas into scalable web solutions. Driven by clean code,
          intuitive design, and continuous innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => setActiveSection("projects")}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="border-2 border-blue-400 text-blue-200 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Emmavoen"
            className="text-gray-200 hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <LucideGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/emmavoen/"
            className="text-gray-200 hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <LucideLinkedin />
          </a>
          <a
            href="mailto:eguavoenemmanuel2019@gmail.com"
            className="text-gray-200 hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

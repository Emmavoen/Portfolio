import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "@/components/ui/themeContext";

interface ActiveSectionProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}
const Header = ({ activeSection, setActiveSection }: ActiveSectionProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* <div className="text-xl font-bold text-gray-800 dark:text-white">
            Adetayo Adewobi
          </div> */}
          <div></div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={24} className="text-yellow-400" />
              ) : (
                <Moon size={24} className="text-gray-600" />
              )}
            </button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

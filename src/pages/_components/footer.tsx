import { Mail } from "lucide-react";
import { LucideGithub, LucideLinkedin } from "@/components/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Emmanuel Eguavoen</div>
          <p className="text-gray-400 mb-6">Full Stack Software Engineer</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Emmavoen"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LucideGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emmavoen/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LucideLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Emmanuel Eguavoen. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

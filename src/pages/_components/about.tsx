import { motion } from "framer-motion";

const AboutSection = ({
  setActiveSection,
}: {
  setActiveSection: (sectionId: string) => void;
}) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="space-y-12 text-left">
          {[
            {
              title: "Who I Am",
              text: "I'm a full-stack engineer who enjoys building thoughtful, reliable, and user-friendly systems that make a real difference.",
            },
            {
              title: "My Journey",
              text: "My background in Compuer Science taught me to approach problems with structure and curiosity. That mindset guides me today—whether I'm breaking down complex challenges, exploring new technologies, or refining features until they feel just right.",
            },
            {
              title: "How I Work",
              text: "I'm a problem solver at heart, a fast learner when faced with something new, and a firm believer in teamwork and clear communication. I've worked with startups and enterprises alike, bringing ideas to life and creating products people truly enjoy using.",
            },
            {
              title: "Beyond the Code",
              text: "When I'm not coding, I'm often reading about emerging tech, sharing ideas with other developers, or exploring creative projects that stretch how I think.",
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {section.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="italic text-blue-600 dark:text-blue-400 text-center mt-16"
        >
          "Build with empathy, ship with purpose."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <button
            onClick={() => setActiveSection("projects")}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-500 transition-all transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="border-2 border-blue-500 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-md"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

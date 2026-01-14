import { Code, Server, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Shadcn UI" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "NestJS" },
        { name: "C#" },
        { name: ".NET" },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "MySQL" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="w-6 h-6" />,
      skills: [{ name: "Docker" }, { name: "Git" }, { name: "CI/CD" }],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 dark:text-blue-400 mr-3 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;

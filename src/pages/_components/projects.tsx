import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SchoolBase — School Management Platform",
      description:
        "A web platform that helps schools automate tasks, improve communication, and give students, teachers, and parents a seamless digital experience.",
      image: assets.schoolbase,
      tech: ["NextJS", "TypeScript", "Tailwind", "NestJS", "PostgreSQL"],
      github: "#",
      demo: "https://www.schoolbase.africa/",
    },
    {
      title: "ICOP Academy LMS",
      description:
        "An online learning system for managing courses, instructors, and students with progress tracking and content delivery.",
      image: assets.lmsImg,
      tech: ["React", "TypeScript", "Tailwind", "Express", "MongoDB"],
      github: "#",
      demo: "https://lms.icopglobal.org/",
    },
    {
      title: "Resolve.vote — Online Voting & Decision Platform",
      description:
        "A secure digital voting platform that enables transparent decision-making for organizations and communities. I built the backend using NestJS, TypeORM, and PostgreSQL to ensure scalability and data integrity.",
      image: assets.resolveImg,
      tech: ["NestJS", "TypeORM", "PostgreSQL"],
      github: "#",
      demo: "https://resolve.vote/",
    },
    {
      title: "Talent Marketplace",
      description:
        "A web platform that connects professionals and clients through profiles, bookings, and job listings.",
      image: assets.talentImg,
      tech: ["React", "TypeScript", "Tailwind", "Express", "MongoDB"],
      github: "#",
      demo: "https://www.talents527.com/",
    },
    {
      title: "HavenLease — Rental Platform",
      description:
        "A flexible rental marketplace for properties and shared spaces with verified listings and payment management.",
      image: assets.havenleaseImg,
      tech: ["React", "TypeScript", "Tailwind", "Express", "MongoDB"],
      github: "#",
      demo: "https://www.havenlease.com/",
    },
    {
      title: "SurefundX Capital Website",
      description:
        "Responsive financial services site built for SureFundX Capital, focused on clarity and credibility.",
      image: assets.surefundx,
      tech: ["React", "TypeScript", "Tailwind", "Express", "MongoDB"],
      github: "#",
      demo: "https://www.surefundxcapital.com/",
    },
  ];
  return (
    <motion.section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
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
            className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          >
            A few of my recent projects demonstrating practical full-stack
            development experience.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-grow p-6 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;

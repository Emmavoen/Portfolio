// import { Calendar, MapPin } from "lucide-react";
// import { motion } from "framer-motion";

// const ExperienceSection = () => {
//   const experiences = [
//     {
//       title: "Full Stack Engineer",
//       company: "BCT Limited",
//       period: "2025 - Present",
//       location: "Hybrid",
//       description: [
//         "Mentor junior developers and conduct code reviews.",
//         "Implemented CI/CD pipelines reducing deployment time by 60%.",
//         "Collaborated with product team to deliver features ahead of schedule.",
//       ],
//     },
//     {
//       title: "Full Stack Engineer",
//       company: "Kitovu Technology",
//       period: "2022 - 2025",
//       location: "Onsite",
//       description: [
//         "Converted design mockups to pixel-perfect implementations.",
//         "Designed and implemented RESTful APIs and database schemas.",
//         "Integrated third-party services and payment processing.",
//         "Achieved 99.9% uptime and optimized application performance.",
//       ],
//     },
//     {
//       title: "Backend Engineer",
//       company: "HNG Tech",
//       period: "2024 - 2025",
//       location: "Remote",
//       description: [
//         "Built a secure voting platform with NestJS, TypeORM, and PostgreSQL for open and private elections.",
//         "Integrated Google OAuth and AWS S3 for seamless authentication and file uploads.",
//         "Developed backend systems for an AI-driven education platform with automated workflows.",
//       ],
//     },
//   ];

//   return (
//     <motion.section
//       id="experience"
//       className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.h2
//             className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Work Experience
//           </motion.h2>

//           {/* Timeline Container */}
//           <div className="relative">
//             {/* Animated Vertical Line */}
//             <motion.div
//               className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-blue-600 dark:from-blue-900 dark:to-blue-400"
//               initial={{ height: 0 }}
//               whileInView={{ height: "100%" }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               viewport={{ once: true }}
//             ></motion.div>

//             {/* Experience Cards */}
//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative flex items-start"
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.2,
//                     ease: "easeOut",
//                   }}
//                   viewport={{ once: true }}
//                 >
//                   {/* Timeline Dot */}
//                   <motion.div
//                     className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
//                     whileHover={{
//                       scale: 1.2,
//                       boxShadow: "0 0 10px rgba(37,99,235,0.5)",
//                     }}
//                   ></motion.div>

//                   {/* Card */}
//                   <motion.div
//                     className="ml-20 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     {/* Header Row */}
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
//                       <h3 className="text-xl font-bold text-gray-800 dark:text-white">
//                         {exp.title}
//                       </h3>
//                       <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-2 md:mt-0">
//                         <Calendar size={14} className="mr-1" />
//                         {exp.period}
//                       </div>
//                     </div>

//                     {/* Company + Location */}
//                     <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
//                       {exp.company}
//                       <span className="mx-2">•</span>
//                       <div className="flex items-center text-gray-600 dark:text-gray-300">
//                         <MapPin size={14} className="mr-1" />
//                         {exp.location}
//                       </div>
//                     </div>

//                     {/* Description List */}
//                     <ul className="space-y-2">
//                       {exp.description.map((item, itemIndex) => (
//                         <motion.li
//                           key={itemIndex}
//                           className="text-gray-700 dark:text-gray-300 flex items-start"
//                           initial={{ opacity: 0, x: -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           transition={{
//                             duration: 0.4,
//                             delay: itemIndex * 0.1,
//                           }}
//                           viewport={{ once: true }}
//                         >
//                           <span className="text-blue-500 dark:text-blue-400 mr-2 mt-2 text-xs">
//                             ▪
//                           </span>
//                           {item}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default ExperienceSection;

import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "BCT Limited",
      period: "2025 - Present",
      location: "Lagos, Nigeria",
      description: [
        "Develop enterprise-grade web apps using React, Node.js, and TypeScript; built accessible UI with ShadCN & Tailwind.",
        "Engineered API validation middleware reducing runtime production bugs by 40% and refactored legacy modules.",
        "Managed data modeling using PostgreSQL and MongoDB, and integrated third-party services like Paystack.",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Lehinet Solution",
      period: "2023 - 2024",
      location: "Benin City",
      description: [
        "Spearheaded fullstack redesign, contributing 60% of the codebase and boosting system efficiency by 25%.",
        "Implemented secure authentication (JWT, OAuth) which increased user sign-ups by 35%.",
        "Introduced a centralized logging system that accelerated error detection by 50% and improved troubleshooting.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Credevnet Technologies",
      period: "2022 - 2023",
      location: "Abuja",
      description: [
        "Built ASP.NET Core Web APIs with Entity Framework Core, improving system performance by 30%.",
        "Integrated role-based authentication with ASP.NET Core Identity to eliminate unauthorized access incidents.",
        "Designed layered architecture (Domain, Application, Infrastructure) to improve scalability and maintainability.",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-blue-600 dark:from-blue-900 dark:to-blue-400"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 10px rgba(37,99,235,0.5)",
                    }}
                  ></motion.div>

                  {/* Card */}
                  <motion.div
                    className="ml-20 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-2 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Company + Location */}
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {exp.company}
                      <span className="mx-2">•</span>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description List */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: itemIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-500 dark:text-blue-400 mr-2 mt-2 text-xs">
                            ▪
                          </span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

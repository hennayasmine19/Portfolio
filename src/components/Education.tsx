import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { FaUniversity } from "react-icons/fa";




const education = [
  {
    degree: "Bachelor of Technology in Electronics and Communication",
    institution: "VIT-AP University",
    year: "2021-2025",
    description: "Minor in Data Analytics",
    cgpa: "CGPA : 9.00",
    image: ""
  },
  {
    degree: "Intermediate Education in MPC",
    institution: "Sri Chaitanya College",
    year: "2019-2021",
    description: "",
    cgpa: "Percentage : 96.4%",
    image: ""
  },
  {
    degree: "Secondary Education",
    institution: "Nirmala High School",
    year: "2018-2019",
    description: "",
    cgpa: "CGPA : 9.3",
    image: "/api/placeholder/24/24"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          🎓 Education
        </motion.h2>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="rounded-xl p-6 shadow-lg bg-white dark:bg-gray-700 transition-all duration-300 hover:shadow-xl"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaUniversity />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {edu.degree}
                  </motion.h3>
                  <motion.p 
                    className="text-lg mt-1 text-gray-800 dark:text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {edu.institution}
                  </motion.p>
                  <motion.div 
                    className="flex items-center mt-2 text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.year}
                  </motion.div>
                  {edu.description && (
                    <motion.p 
                      className="mt-2 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {edu.description}
                    </motion.p>
                  )}
                  <motion.p 
                    className="mt-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {edu.cgpa}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
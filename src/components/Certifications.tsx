import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "RINL Project Trainee",
    issuer: "Rashtriya Ispat Nigam Limited",
    date: "2023",
    description: "Completed a hands-on project on Medium Voltage Drives, gaining insights into industrial automation and power systems.",
    skills: ["Industrial Automation", "Power Systems", "Technical Analysis"],
    url: "https://drive.google.com/file/d/1y52SjXCAw5l0xfRrOAH501wgrAOejTLA/view?usp=sharing"
  },
  {
    name: "Data Science for Engineers",
    issuer: "NPTEL",
    date: "2024",
    description: "Learned fundamental data science concepts, including statistical analysis, machine learning algorithms, and data visualization.",
    skills: ["Machine Learning", "Data Visualization", "Statistical Analysis"],
    url: "https://drive.google.com/file/d/1r3qe8PzYjhcDToOY480M9qihW8MYFXvK/view?usp=sharing"
  },
  {
    name: "Data Analytics Intern",
    issuer: "IBM",
    date: "2023",
    description: "Worked on real-world global analysis of depression data using Tableau, applying ETL techniques, SQL, and business intelligence tools.",
    skills: ["ETL", "SQL", "Business Intelligence", "Tableau"],
    url: "https://drive.google.com/file/d/1xl_Ko6B453vMNQ9OxIgHvVyoE_MVHsU1/view?usp=sharing"
  },
  {
    name: "Data Analytics",
    issuer: "YBI Foundation",
    date: "2024",
    description: "Developed proficiency in data analysis using Python, Power BI, and Tableau, focusing on real-world case studies.",
    skills: ["Python", "Power BI", "Tableau"],
    url: "https://drive.google.com/file/d/1NVrrkbQ3NWyrzV91dw3SuEG13_AWIqcB/view?usp=sharing"
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

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          🏆 Professional Certifications
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
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
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 dark:text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {cert.name}
                    </motion.h3>
                    <motion.a 
                      href={cert.url}
                      className="text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <motion.p 
                    className="mt-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {cert.issuer}
                  </motion.p>
                  <motion.p 
                    className="text-sm mt-1 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {cert.date}
                  </motion.p>
                  <motion.p 
                    className="mt-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {cert.description}
                  </motion.p>
                  <motion.div 
                    className="mt-2 flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {cert.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
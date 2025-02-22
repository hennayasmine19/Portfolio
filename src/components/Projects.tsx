import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Identification of Skin Disease Using Raspberry Pi',
    description: 'Developed a CNN model for skin disease classification integrated with Raspberry Pi for real-time predictions.',
    details: 'This project leverages convolutional neural networks (CNN) to classify different skin diseases using image processing techniques. The model runs on a Raspberry Pi to provide real-time diagnostics, making it a cost-effective and portable solution for remote healthcare.',
    technologies: ['Matlab', 'Raspberry Pi', 'Machine Learning', 'IoT']
  },
  {
    id: 2,
    title: 'Sales Performance Dashboard',
    description: 'Designed an interactive sales dashboard in Power BI with trend analysis, KPIs, and forecasting.',
    details: 'The dashboard provides insights into sales trends, regional performance, and customer purchasing behaviors. It helps businesses optimize their marketing strategies and improve decision-making using historical and predictive analytics.',
    technologies: ['Power BI', 'SQL', 'ETL']
  },
  {
    id: 3,
    title: 'Depression Data Analysis Using Tableau',
    description: 'Conducted a global depression analysis with interactive Tableau visualizations and socio-economic correlations.',
    details: 'By analyzing global depression statistics, this project identifies patterns and correlations with various socio-economic factors such as employment rates, income levels, and healthcare accessibility. The visualizations help policymakers make data-driven decisions.',
    technologies: ['Tableau', 'Data Visualization', 'Statistical Analysis']
  },
  {
    id: 4,
    title: 'Real Estate Price Prediction',
    description: 'Built a predictive model for real estate prices using regression techniques and data visualization.',
    details: 'This project applies regression models to predict property prices based on factors such as location, size, and market trends. The insights help buyers and investors make informed real estate decisions.',
    technologies: ['Python', 'Machine Learning', 'JSON', 'Data Visualization']
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

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          🖥️ Featured Projects
        </motion.h2>
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl p-6 w-full mx-auto"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="mb-4 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              <motion.p 
                className="mb-4 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.details}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Database, LineChart, Table, Code, PieChart } from 'lucide-react';

const skills = [
  {
    name: 'Data Analytics & Visualization',
    description: [
      'Power BI',
      'Tableau',
      'Microsoft Excel',
      'Data Storytelling',
      'Dashboard Development'
    ],
    icon: BarChart
  },
  {
    name: 'Data Handling & Databases',
    description: [
      'SQL (MySQL, PostgreSQL)',
      'ETL',
      'Data Cleaning',
      'JSON & API Integration'
    ],
    icon: Database
  },
  {
    name: 'Statistical & Machine Learning',
    description: [
      'Statistical Analysis',
      'Predictive Modeling',
      'Regression & Classification',
      'Feature Engineering'
    ],
    icon: LineChart
  },
  {
    name: 'Business Intelligence',
    description: [
      'Creating dashboards & reports that drive business decisions',
      'Trend Forecasting'
    ],
    icon: PieChart
  },
  {
    name: 'Programming & Tools',
    description: [
      'Python (Pandas, NumPy, Scikit-learn, Matplotlib)',
      'R',
      'Java',
      'MATLAB',
      'Jupyter Notebook',
      'PyCharm'
    ],
    icon: Code
  },
  {
    name: 'Soft Skills',
    description: [
      'Problem-Solving',
      'Analytical Thinking',
      'Communication',
      'Team Collaboration',
      'Time Management'
    ],
    icon: Table
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -5 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          🛠️ Professional Skillset
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {skill.name}
                  </h3>
                  <motion.ul 
                    className="list-disc pl-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {skill.description.map((item, i) => (
                      <motion.li 
                        key={i}
                        variants={itemVariants}
                        className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
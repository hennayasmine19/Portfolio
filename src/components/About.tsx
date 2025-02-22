import React from 'react';
import { motion } from 'framer-motion';
import pic from "src\WhatsApp Image 2025-02-22 at 15.38.18_72a79e71.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotate: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img
              src={pic}
              alt="Professional headshot"
              className="rounded-full w-full h-full object-cover shadow-xl relative z-10"
            />
          </motion.div>
          
          <motion.div 
            className="flex-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={textVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              📝 About Me
            </motion.h2>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Ever wondered how raw numbers can tell a story? 📊 
              That's what drew me into data analytics—the ability to transform scattered data points into meaningful insights that drive real-world decisions.
            </motion.p>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              As a Data Analytics student, I've spent my academic journey diving deep into data visualization, exploratory analysis, and predictive modeling. 
              Through hands-on projects, I've worked with tools like Python 🐍, SQL 💾, Power BI 📈, Tableau 📊, and Excel 📑 uncovering trends, optimizing processes, and creating interactive dashboards that bring data to life.
            </motion.p>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              What excites me the most is the impact of data-driven storytelling. 
              Whether it's identifying customer behavior patterns, optimizing business strategies, or predicting trends, I thrive on solving complex problems and presenting insights in a way that makes sense to everyone.
            </motion.p>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              I am eager to apply my analytical skills in a professional setting, collaborate with cross-functional teams, and contribute to data-driven business growth.
              My portfolio showcases my projects, highlighting my ability to analyze trends, visualize data effectively, and communicate insights clearly.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
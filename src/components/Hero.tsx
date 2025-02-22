import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const fadeInUp = {
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const socialIconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400
    }
  }
};

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            Shaik Henna Yasmine
            <motion.span 
              className="text-lg md:text-xl text-blue-500 dark:text-yellow-400 font-semibold block mt-2"
              variants={fadeInUp}
            >
              Aspiring Data Analyst
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            Data Analytics | Statistical Analysis | Insight-Driven Decisions | Machine Learning
          </motion.p>

          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            "Every dataset has a story—my job is to decode patterns, identify trends, and translate data into valuable insights."
          </motion.p>

          <motion.div 
            className="flex justify-center space-x-6"
            variants={fadeInUp}
          >
            <motion.a 
              href="https://www.linkedin.com/in/henna-yasmine-shaik-860129260/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 text-2xl"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/hennayasmine19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 dark:text-white hover:text-gray-700 text-2xl"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="mailto:hennayasmineshaik@gmail.com" 
              className="text-red-600 hover:text-red-800 text-2xl"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-4"
            variants={fadeInUp}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
              variants={buttonVariants}
              whileHover="hover"
            >
              Explore Projects
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.span>
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1AAieFNbz-bjUqRxy0GAT9CV4IUE_AnMe/view?usp=sharing"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all"
              variants={buttonVariants}
              whileHover="hover"
            >
              Unlock Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
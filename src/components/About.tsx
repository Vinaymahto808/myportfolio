import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Smartphone, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', icon: Code2, level: 90 },
    { name: 'Flutter', icon: Smartphone, level: 85 },
    { name: 'Node.js', icon: Globe, level: 88 },
    { name: 'Firebase', icon: Database, level: 85 },
    { name: 'MongoDB', icon: Database, level: 80 },
    { name: 'Python', icon: Code2, level: 85 },
    { name: 'AI/ML', icon: Brain, level: 75 },
    { name: 'FastAPI', icon: Zap, level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-900 dark:to-pink-950 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong focus on creating innovative 
                solutions that bridge the gap between cutting-edge technology and real-world problems. 
                My journey began with web development and has evolved to encompass AI/ML, mobile 
                development, and cloud technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                What drives me is the opportunity to build scalable applications that not only 
                solve complex problems but also provide exceptional user experiences. I believe 
                in continuous learning and staying updated with the latest technologies to deliver 
                the best solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new AI/ML frameworks, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon size={20} className="text-blue-600 dark:text-blue-400" />
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
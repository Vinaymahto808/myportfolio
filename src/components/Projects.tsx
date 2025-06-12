import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, PrinterIcon, Bot, MapPin, ShoppingBag, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SecurePDF – Automated PII Redaction',
      description: 'A full-stack AI/ML project that detects and redacts Personally Identifiable Information (PII) in PDF files using OCR and NLP. Built using Streamlit, FastAPI, and Microsoft Presidio.',
      techStack: ['Python', 'Streamlit', 'FastAPI', 'Presidio', 'OCR'],
      features: ['Upload PDF → Extract Text → Detect & Redact PII → Download'],
      icon: Shield,
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Print-Portal – Online Printing Service',
      description: 'A web portal for users to upload documents and get them printed/delivered with options like paper type, color, and number of copies.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase Auth', 'MongoDB', 'Node.js'],
      features: ['File upload', 'Customization options', 'Order tracking', 'Admin panel'],
      icon: PrinterIcon,
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI Healthcare Chatbot',
      description: 'GPT-powered chatbot offering personalized healthcare advice, symptom checks, reminders, and more.',
      techStack: ['Python', 'GPT', 'React'],
      features: ['Natural language chat', 'Health tips', 'Diet/exercise guides'],
      icon: Bot,
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Geolocation Attendance System',
      description: 'A Flutter app for college students that tracks attendance based on GPS location and verifies presence within a specified radius.',
      techStack: ['Flutter', 'Firebase', 'Node.js'],
      features: ['Geofencing', 'Live location check', 'Attendance reports'],
      icon: MapPin,
      github: '#',
      demo: null,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Shopify Development & Customization',
      description: 'Worked on several Shopify projects involving configuration, customization, theme development, and payment gateway integration.',
      techStack: ['Shopify', 'Liquid', 'PHP', 'JavaScript'],
      features: ['Theme tweaks', 'Plugin integration', 'QA', 'Bug fixing'],
      icon: ShoppingBag,
      github: null,
      demo: '#',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'RSVR Technologies Internship',
      description: 'Contributed to frontend development using ReactJS, worked on interactive UI components and integrated APIs.',
      techStack: ['ReactJS', 'REST APIs', 'Tailwind'],
      features: ['Interactive UI components', 'API integration', 'Responsive design'],
      icon: Code,
      github: null,
      demo: '#',
      gradient: 'from-yellow-500 to-orange-500'
    }
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
      id="projects"
      className="py-20 relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-900 dark:to-pink-950 transition-colors duration-500"
    >
      {/* Decorative blurred circles for vibrance */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>
      {/* Animated floating icons */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-24 left-1/4 z-0"
      >
        <Bot size={48} className="text-blue-400 opacity-40" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-32 right-1/4 z-0"
      >
        <PrinterIcon size={48} className="text-pink-400 opacity-40" />
      </motion.div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work in web development, AI/ML, and mobile applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
                }}
                className="group bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 backdrop-blur-md border border-gray-100 dark:border-gray-700"
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white shadow-md`}>
                      <project.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        {project.title.includes('RSVR') ? 'Company' : project.title.includes('Shopify') ? 'Projects' : 'Live Demo'}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
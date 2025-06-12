import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'RSVR Technologies',
      location: 'Remote',
      period: '2024',
      description: 'Contributed to frontend development using ReactJS, worked on interactive UI components and integrated APIs. Developed responsive web applications with modern React patterns.',
      achievements: [
        'Built interactive UI components using ReactJS',
        'Integrated REST APIs for data management',
        'Implemented responsive design with Tailwind CSS',
        'Collaborated with cross-functional teams'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Shopify Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2023 - 2024',
      description: 'Worked on several Shopify projects involving configuration, customization, theme development, and payment gateway integration.',
      achievements: [
        'Customized Shopify themes using Liquid templating',
        'Integrated payment gateways and third-party apps',
        'Performed QA testing and bug fixing',
        'Optimized store performance and user experience'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI/ML Research Intern',
      company: 'IIT Bombay',
      location: 'Mumbai, India',
      period: '2023',
      description: 'Worked on cutting-edge AI/ML research projects focusing on natural language processing and computer vision applications.',
      achievements: [
        'Developed ML models for text classification',
        'Implemented computer vision algorithms',
        'Published research findings and documentation',
        'Collaborated with academic researchers'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  // Floating sparkle animation for timeline
  const sparkleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Scroll progress bar
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalHeight = rect.height - windowHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), totalHeight);
        setProgress(totalHeight > 0 ? scrolled / totalHeight : 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-200 via-fuchsia-200 to-pink-200 dark:from-blue-950 dark:via-fuchsia-900 dark:to-pink-950 transition-colors duration-500 relative"
    >
      {/* Decorative blurred circles for extra vibrance */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>
      {/* Animated floating sparkles */}
      <motion.div
        variants={sparkleVariants}
        animate="animate"
        className="absolute left-1/3 top-10 z-10"
      >
        <Sparkles size={36} className="text-yellow-400 opacity-70" />
      </motion.div>
      <motion.div
        variants={sparkleVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute right-1/4 bottom-16 z-10"
      >
        <Sparkles size={28} className="text-blue-400 opacity-70" />
      </motion.div>
      {/* Scroll progress bar */}
      <div className="fixed left-0 top-0 w-1 h-full z-50">
        <motion.div
          style={{ scaleY: progress, originY: 0 }}
          className="w-full h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"
        />
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My professional journey and key milestones
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"
            ></motion.div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(80,0,120,0.10)" }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot with pulse */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 0 0 rgba(99,102,241,0.4)", "0 0 0 12px rgba(99,102,241,0.1)", "0 0 0 0 rgba(99,102,241,0.4)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full z-10"
                ></motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white/90 dark:bg-gray-700/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 backdrop-blur-md">
                    {/* Header */}
                    <div className={`h-1 bg-gradient-to-r ${exp.color} rounded-t-xl mb-4`}></div>
                    
                    {/* Job Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
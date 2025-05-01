import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaServer,
} from 'react-icons/fa';
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
} from 'react-icons/si';

const SkillBar = ({ name, icon: Icon, level, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${level}%` });
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = level / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= level) {
          setCount(level);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, level, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center mb-2">
        <Icon className="w-5 h-5 text-primary mr-2" />
        <span className="font-medium">{name}</span>
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
          {count}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-full bg-primary dark:bg-primary-600"
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', icon: FaReact, level: 70 },
        { name: 'JavaScript (ES6+)', icon: FaJs, level: 68 },
        { name: 'TypeScript', icon: SiTypescript, level: 65 },
        { name: 'HTML5', icon: FaHtml5, level: 85 },
        { name: 'CSS3', icon: FaCss3Alt, level: 82 },
      ],
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Redux', icon: SiRedux, level: 72 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 70 },
        { name: 'Git', icon: FaGitAlt, level: 75 },
        { name: 'REST APIs', icon: FaServer, level: 70 },
        { name: 'Webpack', icon: SiWebpack, level: 75 },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Technical Skills
      </motion.h1>
      <div className="space-y-12">
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-6">{category.category}</h2>
            <div className="grid gap-6">
              {category.items.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="mr-2">💻</span>
          Technical Proficiencies
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#1E293B] dark:text-[#E2E8F0] mb-2">Languages</h3>
                <p className="text-sm text-[#1E293B] dark:text-[#E2E8F0]">C++, Object-Oriented Programming, Python </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#1E293B] dark:text-[#E2E8F0] mb-2">Frameworks & Libraries</h3>
                <p className="text-sm text-[#1E293B] dark:text-[#E2E8F0]">React.js, Node.js, Bootstrap, Material UI</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#1E293B] dark:text-[#E2E8F0] mb-2">Tools & IDEs</h3>
                <p className="text-sm text-[#1E293B] dark:text-[#E2E8F0]">Visual Studio Code, Eclipse IDE, GitHub, Postman, Jira</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#1E293B] dark:text-[#E2E8F0] mb-2">Testing & Automation</h3>
                <p className="text-sm text-[#1E293B] dark:text-[#E2E8F0]">CI/CD pipelines, Jenkins, Test Automation, SAST, DAST</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 
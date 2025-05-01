import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-[#1E293B] dark:text-[#E2E8F0]"
      >
        Work Experience
      </motion.h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Card content */}
              <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="p-2 bg-[#4F46E5]/10 rounded-lg mr-3">
                    <FaBriefcase className="w-5 h-5 text-[#4F46E5]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-[#1E293B] dark:text-[#E2E8F0]">
                      {experience.title}
                    </h2>
                    <div className="text-[#4F46E5] font-medium text-sm mt-1">
                      {experience.company}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {experience.period}
                    </div>
                    <ul className="mt-2 space-y-1">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#4F46E5] rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span className="text-sm text-[#1E293B] dark:text-[#E2E8F0]">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
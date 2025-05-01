import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';
import { certificates } from '../data/content';

export default function Certificates() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-[#1E293B] dark:text-[#E2E8F0]"
      >
        Certifications
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((certificate, index) => (
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
                    <FaMedal className="w-5 h-5 text-[#4F46E5]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-[#1E293B] dark:text-[#E2E8F0]">
                      {certificate.title}
                    </h2>
                    <div className="text-[#4F46E5] font-medium text-sm mt-1">
                      {certificate.issuer}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {certificate.date}
                    </div>
                    <p className="text-sm text-[#1E293B] dark:text-[#E2E8F0] mt-2">
                      {certificate.description}
                    </p>
                    <motion.a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#4F46E5] hover:text-[#4338CA] mt-4 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
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
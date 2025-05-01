import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile } from '../data/content';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() { 
  const socialIcons = {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
  };

  const carouselItems = [
    {
      title: "Modern Web Development",
      description: "Building responsive and performant web applications",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
      icon: "🎨",
    },
    {
      title: "Problem Solving",
      description: "Tackling complex challenges with elegant solutions",
      icon: "🔧",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            {/* Card content */}
            <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold mb-4 text-[#1E293B] dark:text-[#E2E8F0]"
              >
                {profile.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl text-[#4F46E5] font-semibold mb-4"
              >
                {profile.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-[#1E293B] dark:text-[#E2E8F0] mb-6"
              >
                {profile.bio}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex space-x-4"
              >
                {profile.socialLinks.map((link) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] transition-colors"
                      aria-label={link.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2"
        >
          <div className="group relative w-full max-w-[200px] mx-auto">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-full blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            {/* Profile image container */}
            <div className="relative aspect-square rounded-full overflow-hidden bg-gradient-to-br from-[#4F46E5] to-[#FCD34D] p-1 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img src="/kaif.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16"
      >
        <Slider {...carouselSettings}>
          {carouselItems.map((item, index) => (
            <div key={index} className="px-4">
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                {/* Card content */}
                <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1E293B] dark:text-[#E2E8F0]">
                    {item.title}
                  </h3>
                  <p className="text-[#1E293B] dark:text-[#E2E8F0]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

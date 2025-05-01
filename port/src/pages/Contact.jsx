import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kaifakhtar10@gmail.com',
      href: 'mailto:kaifakhtar10@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: null,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/kaifakhtar10@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _captcha: false,
          _next: window.location.origin + '/contact?submitted=true',
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "top-center",
        autoClose: 3000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || "Failed to send message. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <ToastContainer />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-[#1E293B] dark:text-[#E2E8F0]"
      >
        Contact Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold mb-6 text-[#1E293B] dark:text-[#E2E8F0]">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center">
                    <div className="p-2 bg-[#4F46E5]/10 rounded-lg mr-4">
                      <info.icon className="w-5 h-5 text-[#4F46E5]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#4F46E5] dark:hover:text-[#4F46E5]">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-[#1E293B] dark:text-[#E2E8F0]">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4F46E5] to-[#FCD34D] rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-white dark:bg-[#1E293B] rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold mb-6 text-[#1E293B] dark:text-[#E2E8F0]">Send a Message</h2>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1E293B] dark:text-[#E2E8F0] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1E293B] text-[#1E293B] dark:text-[#E2E8F0] focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1E293B] dark:text-[#E2E8F0] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1E293B] text-[#1E293B] dark:text-[#E2E8F0] focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1E293B] dark:text-[#E2E8F0] mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1E293B] text-[#1E293B] dark:text-[#E2E8F0] focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
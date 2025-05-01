import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rockxkaif',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kaif-ansari-8644061aa',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:kaifakhtar10@gmail.com',
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="glass-effect py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E293B] dark:text-[#E2E8F0] hover:text-[#4F46E5] dark:hover:text-[#4F46E5] transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-sm text-[#1E293B] dark:text-[#E2E8F0]">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
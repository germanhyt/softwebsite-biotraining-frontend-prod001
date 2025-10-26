import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site.config';
import logoImage from '../../assets/img/logo.webp';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 py-4"
    >
      <div className="ccontainer">
        <div className="flex items-center justify-between gap-24">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logoImage.src}
              alt={siteConfig.name}
              className="h-12 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans font-normal text-base text-text-primary hover:text-primary-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block px-8 py-2.5 border-2 border-primary-500 text-primary-500 rounded-full font-sans font-medium hover:bg-primary-500 hover:text-white transition-all">
            Contáctanos
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

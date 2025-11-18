import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/site.config';
import logoImage from '../../assets/img/logo.webp';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[888] bg-white shadow-sm transition-all duration-300 py-4"
    >
      <div className="ccontainer">
        <div className="flex items-center justify-between gap-16 xs:gap-24">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logoImage.src}
              alt={siteConfig.name}
              className="h-[2.5rem] sm:h-[3rem] w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center sm:gap-6 2xl:gap-8">
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
          <a
            href="#contacto"
            className="hidden lg:block px-8 py-2.5 border-2 border-primary-500 text-primary-500 rounded-full font-sans font-medium hover:bg-primary-500 hover:text-white transition-all"
          >
            Contáctanos
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative z-[1001]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-center transition-all"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-center transition-all"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Clip Path Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel with Clip Path */}
            <motion.div
              initial={{ clipPath: 'circle(0% at 100% 0%)' }}
              animate={{ clipPath: 'circle(150% at 100% 0%)' }}
              exit={{ clipPath: 'circle(0% at 100% 0%)' }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] // Custom easing for smooth animation
              }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white z-[999] lg:hidden overflow-y-auto"
            >
              <div className="px-8 pt-4">
                {/* Logo in mobile menu */}
                <div className="mb-8">
                  <img
                    src={logoImage.src}
                    alt={siteConfig.name}
                    className="h-10 w-auto"
                  />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-6 justify-center items-center mb-8 mt-16">
                  {siteConfig.navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="block font-sans font-medium text-xl text-text-primary hover:text-primary-500 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA Button in mobile menu */}
                <motion.a
                  href="#contacto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block w-full px-8 py-3 text-center border-2 border-primary-500 text-primary-500 rounded-full font-sans font-medium hover:bg-primary-500 hover:text-white transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contáctanos
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

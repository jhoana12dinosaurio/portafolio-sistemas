'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useScrollTo } from '@/hooks/useScrollTo';
import { NAVIGATION_ITEMS } from '@/constants';
import { personalInfo } from '@/data/portfolio';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
              {personalInfo.name.charAt(0)}
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {personalInfo.name.split(' ')[0]}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-2"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(personalInfo.contact.social.github, '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(personalInfo.contact.social.linkedin, '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(`mailto:${personalInfo.contact.email}`, '_blank')}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                size="sm"
                onClick={() => window.open(personalInfo.resume, '_blank')}
              >
                <Download className="h-4 w-4 mr-2" />
                CV
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Menú
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col p-4 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  variants={itemVariants}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(personalInfo.contact.social.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(personalInfo.contact.social.linkedin, '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`mailto:${personalInfo.contact.email}`, '_blank')}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  className="w-full"
                  onClick={() => window.open(personalInfo.resume, '_blank')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Descargar CV
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};
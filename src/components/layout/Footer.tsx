'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useScrollTo } from '@/hooks/useScrollTo';
import { personalInfo } from '@/data/portfolio';

export const Footer = () => {
  const { scrollToSection } = useScrollTo();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 mb-4">{personalInfo.title}</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {personalInfo.description.substring(0, 120)}...
            </p>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Habilidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contacto y Redes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {personalInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-300">📍</span>
                <span className="text-gray-300">{personalInfo.contact.location}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(personalInfo.contact.social.github, '_blank')}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(personalInfo.contact.social.linkedin, '_blank')}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(`mailto:${personalInfo.contact.email}`, '_blank')}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 text-sm"
          >
            <span>© {new Date().getFullYear()} {personalInfo.name}. Hecho con</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>y NextJS</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Volver arriba
            </Button>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site.config';
import logoImage from '../../assets/img/logo.webp';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-700 to-primary-900 text-white">
      <div className="ccontainer py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img
              src={logoImage.src}
              alt={siteConfig.name}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              En Biotraining, nuestro objetivo es impulsar tu desarrollo profesional preparando herramientas formativas de alta calidad.
            </p>
          </div>

          {/* Explora */}
          <div className='flex md:justify-center'>
            <div>
              <h3 className="font-heading font-semibold text-sm mb-4">Explora</h3>
              <ul className="space-y-3">
                {/* Beneficios, Cursos, Conócenos, Cursos para empresas */}
                <li>
                  <a href="#beneficios" className="text-sm hover:text-primary-300 transition-colors">
                    ¿Por qué elegirnos?
                  </a>
                </li>
                <li><a href="#cursos" className="text-sm hover:text-primary-300 transition-colors">Cursos</a></li>
                <li><a href="#conocenos" className="text-sm hover:text-primary-300 transition-colors">Conócenos</a></li>
                <li><a href="#empresas" className="text-sm hover:text-primary-300 transition-colors">Para empresas</a></li>
              </ul>
            </div>
          </div>

          {/* Contáctanos */}
          <div className='flex md:justify-center'>
            <div>
              <h3 className="font-heading font-semibold text-sm mb-4">Contáctanos</h3>
              <ul className="space-y-3">
                <li className="text-sm">
                  <a
                    href="https://api.whatsapp.com/send?phone=+51969977934&text=Hola👋,%20me%20puede%20brindar%20más%20información sobre los cursos..."
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="text-sm">
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Síguenos */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-5 h-5" />
              </a>
              {/* <a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">© 2025 Biotraining. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

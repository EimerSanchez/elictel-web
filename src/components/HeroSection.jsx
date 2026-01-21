import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import companyData from '../data/companyData';
import translations from '../data/translations';

const HeroSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-white"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/agrotech-bg.png"
                    alt="Agrotechnology Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <motion.div
                className="relative z-10 p-4 max-w-5xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-primary-600">{companyData.name}</span>
                </motion.h1>

                <motion.p
                    className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {companyData.slogan[language]}
                </motion.p>

                <motion.div
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button
                        onClick={scrollToServices}
                        className="btn-primary"
                        aria-label={t.hero.cta1}
                    >
                        {t.hero.cta1}
                    </button>
                    <button
                        onClick={scrollToContact}
                        className="btn-secondary"
                        aria-label={t.hero.cta2}
                    >
                        {t.hero.cta2}
                    </button>
                </motion.div>

                {/* Stats or Key Info */}
                <motion.div
                    className="mt-16 flex flex-wrap justify-center gap-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="px-6">
                        <div className="text-4xl font-bold text-primary-600">{companyData.years}+</div>
                        <div className="text-sm text-gray-600 mt-1">{t.about.title}</div>
                    </div>
                    <div className="px-6">
                        <div className="text-4xl font-bold text-primary-600">5</div>
                        <div className="text-sm text-gray-600 mt-1">{language === 'es' ? 'Servicios' : 'Services'}</div>
                    </div>
                    <div className="px-6">
                        <div className="text-4xl font-bold text-primary-600">100+</div>
                        <div className="text-sm text-gray-600 mt-1">{language === 'es' ? 'Proyectos' : 'Projects'}</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
};

export default HeroSection;

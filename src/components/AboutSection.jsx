import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import companyData from '../data/companyData';
import translations from '../data/translations';

const AboutSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {companyData.years}+ {t.about.title}
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Mission Card */}
                    <motion.div
                        className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        variants={itemVariants}
                    >
                        <h3 className="text-3xl font-semibold text-primary-600 mb-4">
                            {t.about.mission}
                        </h3>
                        <p className="text-gray-700 italic border-l-4 border-primary-400 pl-4 leading-relaxed">
                            {companyData.mission[language]}
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        className="p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        variants={itemVariants}
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                            {t.about.vision}
                        </h3>
                        <p className="text-gray-700 italic border-l-4 border-gray-400 pl-4 leading-relaxed">
                            {companyData.vision[language]}
                        </p>
                    </motion.div>
                </motion.div>

                {/* About Description */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {companyData.about[language]}
                    </p>
                    <p className="mt-6 text-2xl font-medium text-gray-700">
                        {t.about.focus} <span className="font-extrabold text-primary-600">{companyData.focus[language]}</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import servicesData from '../data/servicesData';
import translations from '../data/translations';

const ServiceCard = ({ service, index, t }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const Icon = service.icon;

    return (
        <motion.div
            className={`service-card ${index % 2 === 0 ? 'bg-white border border-primary-100' : 'bg-gradient-to-br from-primary-600 to-primary-700 text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            {/* Service Image */}
            {service.image && (
                <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>
            )}

            <div className={`p-3 inline-flex items-center justify-center rounded-full mb-4 ${index % 2 === 0 ? 'bg-primary-100 text-primary-600' : 'bg-white text-primary-600'
                }`}>
                <Icon size={30} />
            </div>

            <h4 className={`text-2xl font-bold mb-3 ${index % 2 === 0 ? 'text-gray-900' : 'text-white'}`}>
                {service.title}
            </h4>

            <p className={`text-base mb-4 ${index % 2 === 0 ? 'text-gray-600' : 'text-primary-100'}`}>
                {service.description}
            </p>

            <AnimatePresence>
                {isExpanded && (
                    <motion.p
                        className={`text-sm italic mb-4 ${index % 2 === 0 ? 'text-gray-500' : 'text-primary-200'}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {service.details}
                    </motion.p>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`text-sm font-semibold ${index % 2 === 0 ? 'text-primary-600 hover:text-primary-700' : 'text-white hover:text-primary-100'
                    } transition-colors`}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? 'Show less' : 'Show more'}
            >
                {isExpanded ? t.services.showLess : t.services.showMore}
            </button>
        </motion.div>
    );
};

const ServicesSection = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const services = servicesData[language];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        {t.services.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.services.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

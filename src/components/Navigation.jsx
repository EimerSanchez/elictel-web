import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import companyData from '../data/companyData';
import translations from '../data/translations';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t.nav.home, target: "home" },
        { name: t.nav.about, target: "about" },
        { name: t.nav.services, target: "services" },
        { name: t.nav.contact, target: "contact" },
    ];

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    <img
                        src="/images/logo.png"
                        alt={companyData.name}
                        className="h-16 w-auto transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map(item => (
                        <a
                            key={item.target}
                            onClick={() => scrollToSection(item.target)}
                            className="nav-link"
                            aria-label={`Navigate to ${item.name}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Language Toggle & WhatsApp Button */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="Toggle language"
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                    <a
                        href={`https://wa.me/${companyData.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp inline-flex items-center"
                        aria-label="Contact via WhatsApp"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        {t.nav.whatsapp}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-down">
                    <div className="px-4 py-4 space-y-3">
                        {navItems.map(item => (
                            <a
                                key={item.target}
                                onClick={() => scrollToSection(item.target)}
                                className="block py-2 text-gray-600 hover:text-blue-600 font-medium cursor-pointer transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                            <button
                                onClick={toggleLanguage}
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                {language === 'es' ? 'English' : 'Español'}
                            </button>
                            <a
                                href={`https://wa.me/${companyData.contact.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp text-sm py-2 px-4"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navigation;

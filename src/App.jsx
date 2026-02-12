import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import './styles/index.css';

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen font-sans antialiased text-gray-800">
                <Navigation />
                <main>
                    <HeroSection sectionHeight="70vh" bgHeight="100%" />
                    <AboutSection />
                    <ServicesSection />
                    <ContactSection />
                </main>
            </div>
        </LanguageProvider>
    );
}

export default App;

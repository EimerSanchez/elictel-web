import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import companyData from '../data/companyData';
import translations from '../data/translations';

const ContactSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: ''
    });
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', phone: '', email: '', comments: '' });
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-bold mb-6 text-blue-400">
                            {t.contact.title}
                        </h3>
                        <p className="text-gray-300 mb-8 text-lg">
                            {t.contact.subtitle}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder={t.contact.form.name}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                                aria-label={t.contact.form.name}
                            />

                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={t.contact.form.phone}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="form-input sm:w-1/2"
                                    aria-label={t.contact.form.phone}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.contact.form.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input sm:w-1/2"
                                    aria-label={t.contact.form.email}
                                />
                            </div>

                            <textarea
                                name="comments"
                                placeholder={t.contact.form.comments}
                                value={formData.comments}
                                onChange={handleChange}
                                rows="4"
                                className="form-input"
                                aria-label={t.contact.form.comments}
                            ></textarea>

                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 transform hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                aria-label={t.contact.form.submit}
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <span className="spinner mr-2"></span>
                                        {t.contact.form.sending}
                                    </>
                                ) : (
                                    t.contact.form.submit
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <motion.div
                                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {t.contact.form.success}
                                </motion.div>
                            )}

                            {formStatus === 'error' && (
                                <motion.div
                                    className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {t.contact.form.error}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="mt-8 lg:mt-0 lg:ml-12"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-bold mb-6 text-blue-400">
                            {t.contact.info.title}
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin size={24} className="text-blue-500 mt-1 flex-shrink-0" />
                                <div className="ml-3">
                                    <p className="font-semibold">{t.contact.info.location}</p>
                                    <p className="text-gray-400">{companyData.contact.location}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone size={24} className="text-blue-500 mt-1 flex-shrink-0" />
                                <div className="ml-3">
                                    <p className="font-semibold">{t.contact.info.phone}</p>
                                    <a
                                        href={`tel:${companyData.contact.phone}`}
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {companyData.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Mail size={24} className="text-blue-500 mt-1 flex-shrink-0" />
                                <div className="ml-3">
                                    <p className="font-semibold">{t.contact.info.email}</p>
                                    <a
                                        href={`mailto:${companyData.contact.email}`}
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                    >
                                        {companyData.contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Button */}
                        <div className="mt-10 pt-4 border-t border-gray-700">
                            <h4 className="text-xl font-semibold mb-3">{t.contact.info.join}</h4>
                            <a
                                href={`https://wa.me/${companyData.contact.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full btn-whatsapp"
                                aria-label={t.contact.info.whatsapp}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                {t.contact.info.whatsapp}
                            </a>

                            {/* Social Media Icons */}
                            <div className="mt-8">
                                <h4 className="text-lg font-semibold mb-4">{language === 'es' ? 'Síguenos' : 'Follow Us'}</h4>
                                <div className="flex justify-center gap-4">
                                    {/* LinkedIn */}
                                    <a
                                        href={companyData.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>

                                    {/* Facebook */}
                                    <a
                                        href={companyData.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href={companyData.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-800 hover:bg-pink-600 rounded-full transition-all duration-300 transform hover:scale-110"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                        </svg>
                                    </a>

                                    {/* Twitter/X */}
                                    <a
                                        href={companyData.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 transform hover:scale-110"
                                        aria-label="Twitter"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800">
                {/* Logo and Copyright */}
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src="/images/logo.png"
                        alt={companyData.name}
                        className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                    <p className="text-sm text-gray-500 text-center">
                        &copy; {new Date().getFullYear()} {companyData.name}. {t.footer.rights}
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50 hover:scale-110 transform"
                aria-label={t.footer.backToTop}
            >
                <ChevronUp size={24} />
            </button>
        </footer>
    );
};

export default ContactSection;

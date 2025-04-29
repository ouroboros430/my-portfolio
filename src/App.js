// src/App.js
import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import enMessages from './locales/en.json';
import zhMessages from './locales/zh.json';

function App() {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(enMessages);

  useEffect(() => {
    setMessages(locale === 'en' ? enMessages : zhMessages);
  }, [locale]);

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Header locale={locale} onLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </IntlProvider>
  );
}

export default App;

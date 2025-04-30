// src/App.js
import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// 页面组件
import HomeEn from './pages/HomeEn';
import HomeZh from './pages/HomeZh';
import AboutEn from './pages/AboutEn';
import AboutZh from './pages/AboutZh';
import ContactEn from './pages/ContactEn';
import ContactZh from './pages/ContactZh';
import ProjectsEn from './pages/ProjectsEn';
import ProjectsZh from './pages/ProjectsZh';

// 翻译文件
import enMessages from './locales/en.json';
import zhMessages from './locales/zh.json';

function App() {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(enMessages);

  // 切换语言函数
  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
  };

  // 根据 locale 返回对应的语言页面
  const getHomePage = () => (locale === 'en' ? <HomeEn /> : <HomeZh />);
  const getAboutPage = () => (locale === 'en' ? <AboutEn /> : <AboutZh />)
  const getContactPage = () => (locale === 'en' ? <ContactEn /> : <ContactZh />)
  const getProjectsPage = () => (locale === 'en' ? <ProjectsEn /> : <ProjectsZh />)

  useEffect(() => {
    setMessages(locale === 'en' ? enMessages : zhMessages);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Header locale={locale} onLanguageChange={handleLanguageChange} />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={getHomePage()} />
            <Route path="/about" element={getAboutPage()} />
            <Route path="/projects" element={getProjectsPage()} />
            <Route path="/contact" element={getContactPage()} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </IntlProvider>
  );
}


export default App;

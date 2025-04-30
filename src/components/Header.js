// src/components/Header.js
import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, IdcardOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

const items = [
  {
    label: <Link to="/"><FormattedMessage id="header.home" defaultMessage="主页" /></Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/about"><FormattedMessage id="header.about" defaultMessage="关于我" /></Link>,
    key: 'about',
    icon: <IdcardOutlined />,
  },
  {
    label: <Link to="/projects"><FormattedMessage id="header.projects" defaultMessage="项目" /></Link>,
    key: 'projects',
    icon: <ProjectOutlined />,
  },
  {
    label: <Link to="/contact"><FormattedMessage id="header.contact" defaultMessage="联系我" /></Link>,
    key: 'contact',
    icon: <MailOutlined />,
  },
];

const Header = ({ locale, onLanguageChange }) => {
  const toggleLanguage = () => {
    onLanguageChange(locale === 'en' ? 'zh' : 'en');
  };

  return (
    <>
      <Menu mode="horizontal" defaultSelectedKeys={['home']} items={items} />
      <div style={{ position: 'absolute', top: '10px', right: '20px' }}>
        <Button onClick={toggleLanguage}>
          {locale === 'en' ? '中文' : 'English'}
        </Button>
      </div>
    </>
  );
};

export default Header;

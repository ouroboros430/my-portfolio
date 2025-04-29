// src/components/Header.js
import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, IdcardOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';
import { useIntl, FormattedMessage } from 'react-intl';

const items = [
  {
    label: <Link to="/">主页</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/about">关于我</Link>,
    key: 'about',
    icon: <IdcardOutlined />,
  },
  {
    label: <Link to="/projects">项目</Link>,
    key: 'projects',
    icon: <ProjectOutlined />,
  },
  {
    label: <Link to="/contact">联系我</Link>,
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

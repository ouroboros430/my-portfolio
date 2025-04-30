// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  IdcardOutlined,
  ProjectOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

import './Header.css'; // 引入样式文件

const items = (showText) => [
  {
    label: (
      <Link to="/">
        <span className="menu-icon">
          <HomeOutlined />
        </span>
        {showText && <span className="menu-text"><FormattedMessage id="header.home" defaultMessage="主页" /></span>}
      </Link>
    ),
    key: 'home',
  },
  {
    label: (
      <Link to="/about">
        <span className="menu-icon">
          <IdcardOutlined />
        </span>
        {showText && <span className="menu-text"><FormattedMessage id="header.about" defaultMessage="关于我" /></span>}
      </Link>
    ),
    key: 'about',
  },
  {
    label: (
      <Link to="/projects">
        <span className="menu-icon">
          <ProjectOutlined />
        </span>
        {showText && <span className="menu-text"><FormattedMessage id="header.projects" defaultMessage="项目" /></span>}
      </Link>
    ),
    key: 'projects',
  },
  {
    label: (
      <Link to="/contact">
        <span className="menu-icon">
          <MailOutlined />
        </span>
        {showText && <span className="menu-text"><FormattedMessage id="header.contact" defaultMessage="联系我" /></span>}
      </Link>
    ),
    key: 'contact',
  },
];

const Header = ({ locale, onLanguageChange }) => {
  const toggleLanguage = () => {
    onLanguageChange(locale === 'en' ? 'zh' : 'en');
  };

  const [showText, setShowText] = useState(true);

  // 监听窗口变化，控制是否显示文字
  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化判断一次

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header-container">
      <Menu mode="horizontal" defaultSelectedKeys={['home']} items={items(showText)} />
      <div className="language-switch-button">
        <Button onClick={toggleLanguage} block>
          {locale === 'en' ? '中文' : 'English'}
        </Button>
      </div>
    </div>
  );
};

export default Header;

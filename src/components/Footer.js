// src/components/Footer.js
import React from 'react';
import { Typography } from 'antd';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', marginTop: '40px' }}>
       <p><FormattedMessage id="footer.text" defaultMessage="版权所有 © 我的个人网站" /></p>
    </footer>
  );
};

export default Footer;

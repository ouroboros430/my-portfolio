// src/pages/Home.js
import React from 'react';
import { Menu, Link, Typography, Card } from 'antd';
import { FormattedMessage } from 'react-intl';
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={2}><FormattedMessage id="welcome" /></Title>
      <Paragraph>
        <FormattedMessage id="introductionText" defaultMessage="I am a front-end developer who loves building beautiful and efficient user interfaces." />
      </Paragraph>
      {/* 其他组件 */}
    </div>
  );
};

export default Home;

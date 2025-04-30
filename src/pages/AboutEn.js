// src/pages/About.js
import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={2}>About Me</Title>
      <Paragraph>
        I am a frontend developer who enjoys challenges, focusing on React and modern web development technologies.
      </Paragraph>
      <Card title="Skills" style={{ marginTop: '20px' }}>
        <ul>
          <li>React / Vue</li>
          <li>TypeScript</li>
          <li>Node.js / Express</li>
          <li>Ant Design / Tailwind CSS</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;
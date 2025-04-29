// src/pages/About.js
import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Title level={2}>关于我</Title>
      <Paragraph>
        我是一个喜欢挑战的前端开发者，专注于 React 和现代 Web 开发技术。
      </Paragraph>
      <Card title="技能" style={{ marginTop: '20px' }}>
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

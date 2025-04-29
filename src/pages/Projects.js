// src/pages/Projects.js
import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title } = Typography;

const projects = [
  { title: 'React 博客系统', desc: '使用 React + Node.js 构建的全栈博客系统' },
  { title: '电商后台管理系统', desc: '基于 Ant Design Pro 的管理平台' },
  { title: '天气预报小程序', desc: '调用第三方 API 展示天气情况的小程序' },
];

const Projects = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>项目展示</Title>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card title={project.title} bordered={true}>
              <p>{project.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;

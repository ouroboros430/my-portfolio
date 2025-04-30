// src/pages/ProjectsEn.js
import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title } = Typography;

const projects = [
  { title: 'React Blog System', desc: 'A full-stack blog system built with React + Node.js' },
  { title: 'E-commerce Admin System', desc: 'An admin platform based on Ant Design Pro' },
  { title: 'Weather Forecast Mini Program', desc: 'A mini program that displays weather information using a third-party API' },
];

const Projects = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Project Showcase</Title>
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

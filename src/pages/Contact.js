// src/pages/Contact.js
import React from 'react';
import { Typography, Form, Input, Button, message } from 'antd';

const { Title } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('发送消息:', values);
    message.success('已提交留言！');
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <Title level={2}>联系我</Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="姓名" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="邮箱" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="留言" name="message" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </div>
  );
};

export default Contact;

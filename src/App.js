import {Card, Menu, Input, Button, Form, message } from 'antd'; 
//import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom'; 
import './App.css'; 

const onFinish = (values) => { 
    message.success(`Name: ${values.name} , Email: ${values.email} , Phone: ${values.phone}`); 
  }; 

const { SubMenu } = Menu;

function handleClick(e) {
  const itemId = e.key;
  const newWindow = window.open('', '_blank');
  ReactDOM.render(
    <div style={{ padding: '30px' }}>
      <Card title={`Card Title - ${itemId}`} bordered={false}>
        <p>Here you can find more Info.</p>
      </Card>
    </div>,
    newWindow.document.body
  );
}

function App() {
  return (
     <div>
      <Card title="User Information IN."> 
        <Form onFinish={onFinish}> 
          <Form.Item 
            label="Name" 
            name="name" 
            rules={[{ required: true, message: '(!) Warning. NO NAME / PRONAME INTRODUCED! -> Required.' }]} 
          > 
            <Input /> 
          </Form.Item> 
          <Form.Item 
            label="Email" 
            name="email" 
            rules={[{ required: true, message: '(!) Warning. NO EMAIL INTRODUCED! -> Required.' }]} 
          > 
            <Input /> 
          </Form.Item> 
          <Form.Item 
            label="Phone" 
            name="phone" 
            rules={[{ required: true, message: '(!) Warning. NO PHONE NUMBER INTRODUCED! -> Required.' }]} 
          > 
            <Input /> 
          </Form.Item> 
          <Form.Item> 
            <Button type="primary" htmlType="submit"> 
              Submit 
            </Button> 
          </Form.Item> 
        </Form> 
      </Card> 
        <div>
      <Menu onClick={handleClick} mode="horizontal">
        <SubMenu key="sub1" title="Menu">
          <Menu.Item key="1">Name Info</Menu.Item>
          <Menu.Item key="2">Email Info</Menu.Item>
          <Menu.Item key="3">Phone Info</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
      </div>
  );
}
export default App;
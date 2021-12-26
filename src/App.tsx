import React from 'react';
import './App.css';
import {Header} from "antd/lib/layout/layout";
import {Menu} from "antd";
import TravelFees from "./views/TravelFees";
import 'antd/dist/antd.css';

function App() {
  const [current, setCurrent] = React.useState<string>('home');
  
  return (
    <>
      <Header style={{fontSize: 36, color: 'white'}}>Enterprise Travel Management System</Header>
      <Menu onClick={(menu) => setCurrent(menu.key)} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          Home Page
        </Menu.Item>
        <Menu.Item key="travelFees">
          Travel Fees
        </Menu.Item>
        <Menu.Item key="accountManagement">
          Account Management
        </Menu.Item>
      </Menu>
      {current === 'travelFees' && <TravelFees/>}
    </>
  
  );
}

export default App;

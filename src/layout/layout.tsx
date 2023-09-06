import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import './layout.css';
import { menus } from './layout.config';
import { Route } from 'dva/router';
import BannerManage from '../pages/BannerManage/BannerManage';
import ActivityManage from '../pages/ActivityManage/ActivityManage';
import RegisterManage from '../pages/RegisterManage/RegisterMange';
import RegisterUserCheck from '../pages/RegisterUserCheck/RegisterUserCheck';
import AdminUserManage from '../pages/AdminUserManage/AdminUserManage';
import { MenuInfo } from 'rc-menu/lib/interface'

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const linkPage = ({ key }: MenuInfo) => {

  }
  return (
    <Layout id="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">活动管理平台</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menus}
          onClick={linkPage}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Route path="/bannerManage">
            <BannerManage />
          </Route>
          <Route path="/activityManage">
            <ActivityManage />
          </Route>
          <Route path="/registerManage">
            <RegisterManage />
          </Route>
          <Route path="/adminUserManage">
            <AdminUserManage />
          </Route>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
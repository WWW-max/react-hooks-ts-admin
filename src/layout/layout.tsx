import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import './layout.css';
import { menus } from './layout.config';
import { Route, Switch } from 'dva/router';
import BannerManage from '../pages/BannerManage/BannerManage';
import ActivityManage from '../pages/ActivityManage/ActivityManage';
import AdminUserAdmin from '../pages/AdminUserAdmin/AdminUserAdmin';
import RegisterUserCheck from '../pages/RegisterUserCheck/RegisterUserCheck';
import AdminUserManage from '../pages/AdminUserManage/AdminUserManage';
import { MenuInfo } from 'rc-menu/lib/interface'
import { useHistory } from 'dva/router';
import Login from '../pages/Login/Login';
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();
  const linkPage = ({ key }: MenuInfo) => {
    history.push(key);
  }
  const logout = () => {
    history.push('/login');
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
          <div className="header-box">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <Button type='link' className="header-btn" onClick={logout}>退出登录</Button>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/bannerManage">
              <BannerManage />
            </Route>
            <Route path="/activityManage">
              <ActivityManage />
            </Route>
            <Route path="/userManage/registerUserCheck">
              <RegisterUserCheck />
            </Route>
            <Route path="/userManage/adminUserAdmin">
              <AdminUserAdmin />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
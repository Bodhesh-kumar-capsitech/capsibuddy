import React, { useState } from 'react';
import {
  ProductOutlined,
  WechatOutlined,
  TeamOutlined,
  UserOutlined,
  BellFilled,
  SettingFilled,
  MailOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Grid,
  Drawer,
} from 'antd';
import StatsCards from './Dashboardlayout/StatsCards';
import Chat from './Chatcomponents/Chat';
import Lead from './Leadscomponents/Lead';
import Teammember from './Teammembercomponents/Teammember';
import Team from './Teams/Team';
import Quick from './Quikreply/Quick';

const { Content, Sider, Header } = Layout;
const { useBreakpoint } = Grid;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <ProductOutlined />),
  getItem('Chats', '2', <WechatOutlined />),
  getItem('Leads', '3', <UserOutlined />),
  getItem('Team Members', '4', <UserOutlined />),
  getItem('Teams', '5', <TeamOutlined />),
  getItem('Quick Replies', '6', <MailOutlined />),
];

const HomeLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const screens = useBreakpoint();
  const isMobile = !screens.xl;

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    setSelectedKey(key);
    if (isMobile) setDrawerVisible(false);
  };

  const menuContent = (
    <Menu
      theme="light"
      selectedKeys={[selectedKey]}
      mode="inline"
      items={items}
      onClick={handleMenuClick}
      className="font-normal text-sm !figtree-custom custom-menu"

    />
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Fixed Sidebar */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint='lg'
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: colorBgContainer,
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 1000,
            padding: '8px',
            overflow: 'auto',
          }}
          width={280}
          className="rounded-xl m-2"
        >
          <div className="flex flex-row flex-wrap sm:flex-nowrap items-center"><img src="Objects.png" alt="" className="h-[34px] w-[39px]" /><div className="text-transparent bg-clip-text bg-gradient-to-l from-[#A7BEFE] to-[#43319A] !comfortaa-custom text-center font-bold text-3xl p-2">CapsiBuddy</div></div>
          {menuContent}
        </Sider>
      )}

      {/* Main Layout */}
      <Layout
        style={{
          marginLeft: isMobile ? 0 : collapsed ? 80 : 280,
        }}
      >
        {/* Fixed Header */}
        <header
          className={`fixed top-0 right-0 z-50 flex h-14 items-center justify-between bg-[#F4F4F4] px-4 transition-all duration-300
    ${isMobile ? 'left-0' : collapsed ? 'left-20' : 'left-72'}`}
        >
          {/* Left: Breadcrumb & Menu */}
          <div className="flex items-center gap-2">
            {isMobile && (
              <button
                onClick={() => setDrawerVisible(true)}
                className="text-xl text-blue-600"
              >
                <MenuOutlined />
              </button>
            )}
            <Breadcrumb
              className="font-semibold text-xs md:text-sm figtree-custom"
              items={[
                { title: 'Home' },
                {
                  title:
                    (items.find((i) => i?.key === selectedKey) as { label?: React.ReactNode })?.label || '',
                },
              ]}
            />
          </div>

          {/* Right: User Info + Icons */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="flex items-center gap-1 cursor-pointer">
              <img src="user.png" alt="user" className="h-5 w-5" />
              <p className="text-xs md:text-sm font-normal">Hi, Anthony</p>
            </div>
            <BellFilled className="h-5 w-5 cursor-pointer" />
            <SettingFilled className="h-5 w-5 cursor-pointer" />
          </div>
        </header>



        {/* Main Content */}
        <Content style={{ marginTop: 48, padding: 14 }}>
          <div>
            {selectedKey === '1' && <StatsCards />}
            {selectedKey === '2' && <Chat />}
            {selectedKey === '3' && <Lead />}
            {selectedKey === '4' && <Teammember />}
            {selectedKey === '5' && <Team />}
            {selectedKey === '6' && <Quick />}
          </div>
        </Content>
      </Layout>

      {/* Drawer for mobile menu */}
      <Drawer
        title={
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#A7BEFE] to-[#43319A] !comfortaa-custom font-bold text-xl">
            CapsiBuddy</div>
        }
        placement="left"
        closable
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={220}
        height="100vh"
        bodyStyle={{ padding: 0, height: '100%' }}

      >
        {menuContent}
      </Drawer>
    </Layout>
  );
};

export default HomeLayout;

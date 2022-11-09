import { DefaultFooter, MenuDataItem } from '@ant-design/pro-layout';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Avatar } from 'antd';
import asideMenuConfig from './menuConfig';
import { HeartOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'ice';

const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
};

const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, routes, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    routes: routes && loopMenuItem(routes),
  }));

export default function BasicLayout({ children, location }) {
  return (
    <ProLayout
      style={{
        minHeight: '100vh',
      }}
      location={{
        pathname: location.pathname,
      }}
      menu={{ request: async () => loopMenuItem(asideMenuConfig) }}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}><>{defaultDom}</></Link>;
      }}
      headerRender={() => {
        return false;
      }}
      headerTitleRender={() => {
        return false;
      }}
      route={{
        routes: asideMenuConfig,
      }}
      rightContentRender={() => (
        <div>
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
      )}
      breadcrumbRender={(routers = []) => []}
    >
      {children}
    </ProLayout>
  );
}

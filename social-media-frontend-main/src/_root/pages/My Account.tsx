import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import Notifications from '../components/Notifications';


const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Profile',
    children: <Profile/>,
  },
  {
    key: '2',
    label: 'Notifications',
    children: <Notifications/>,
  },
  {
    key: '3',
    label: 'Settings',
    children: <Settings/>,
  },
];

const MyAccount = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

export default MyAccount
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import Notifications from '../components/Notifications';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


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

  const {user} = useContext(UserContext)
  console.log("user on pf page", user)
  return (
    <>
    <div className='flex flex-row p-4'>
      <img src='assets/icons/profile-placeholder.svg' className='h-[70px] w-[70px]'></img>
      <div className='flex flex-col justify-center items-start pl-4'>
        <h2 className='text-light-4 font-bold text-lg'>@{user?.username}</h2>
        <p className='text-light-3 text-xs'>Email : {user?.email}</p>
      </div>
      
      
      
    </div>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default MyAccount
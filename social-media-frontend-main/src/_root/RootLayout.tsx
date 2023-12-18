
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { useContext, useState } from 'react';
import { Home } from './pages';
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Create from './pages/Create';
import { UserContext } from './context/UserContext';
import MyRoutes from './_defaultProps';

const RootLayout = () => {
 
  const defprops = MyRoutes()
  const [pathname, setPathname] = useState('/');
  const [page, setPage] = useState(<Home/>);

  const suffix = (
    <EditOutlined className="text-primary-1 text-2xl"
    />
  );
  
  const {user} = useContext(UserContext)

  // console.log("first", user)

  const handleCreatePostClick = () => {
    // Update state to navigate to the "Create Posts" page
    setPathname('/create'); // Set the pathname to '/create'
    setPage(<Create />); // Set the page to the Create component
  };

  return (
    
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
       
      <ProLayout
        title= "Tradeverse"
        logo="assets/images/tradeverselogo.png"
        {...defprops}
        //{...defaultProps}
      
        location={{
          pathname,
        }}


        menuFooterRender={(props) => {
          return (
            <div className='flex flex-col'>
            <a
              className='font-bold text-primary-2 w-full pl-5 my-1'
              href="/signin"
            >
              {!user &&  !props?.collapsed && 'Sign in'}
            </a>   
            <a
            className='font-bold text-primary-2 w-full pl-5 my-1'
            href="/signin"
          >
            {!user &&  !props?.collapsed && 'Register'}
          </a>  
          </div>          
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
              setPage(item.component);
            }}
          >
            {dom}
          </a>
          
        )} 
      >
        <PageContainer>
          <div
            style={{
              width: "full",
              height: '120vh',
              minHeight: 600,
            }}
          >
          {/* Here goes the component */}
          { pathname==="/" &&  <Input
            placeholder="Create post"
            size="large"
            suffix={suffix}
            onClick={handleCreatePostClick}
          />}
          {page}
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  );
}

export default RootLayout
// import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProLayout } from '@ant-design/pro-components';

import { useState } from 'react';
import defaultProps from './_defaultProps';
import { Home } from './pages';
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Create from './pages/Create';


const RootLayout = () => {
  // const settings = useState<Partial<ProSettings> | undefined>({
  //   fixSiderbar: true,
  // });
  const [pathname, setPathname] = useState('/');
  const [page, setPage] = useState(<Home/>);

  const suffix = (
    <EditOutlined className="text-primary-1 text-2xl"
    />
  );

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
        
        {...defaultProps}
        location={{
          pathname,
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
        <PageContainer 
        
        >
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
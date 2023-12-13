// import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProLayout } from '@ant-design/pro-components';

import { useState } from 'react';
import defaultProps from './_defaultProps';
import { Home } from './pages';


const RootLayout = () => {
  // const settings = useState<Partial<ProSettings> | undefined>({
  //   fixSiderbar: true,
  // });
  const [pathname, setPathname] = useState('/');
  const [page, setPage] = useState(<Home/>);

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
        content={page}
        >
          <div
            style={{
              width: "full",
              height: '120vh',
              minHeight: 600,
            }}
          >
          {/* Here goes the component */}
          
          
          </div>
        </PageContainer>
      </ProLayout>
      
    </div>
   
  );
}

export default RootLayout
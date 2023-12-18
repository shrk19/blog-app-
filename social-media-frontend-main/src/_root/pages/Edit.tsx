// not used anywhere 
import { ProLayout, PageContainer } from '@ant-design/pro-components';
import { useState } from 'react'
import { Home } from '.';
import MyRoutes from '../_defaultProps';

const Edit = () => {
  const defprops = MyRoutes()
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
        {...defprops}
      
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
        
        <PageContainer >
          <div
            style={{
              width: "full",
              height: '120vh',
              minHeight: 600,
            }}
          >
          {/* Here goes the component */}
          {page}
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  )
}

export default Edit
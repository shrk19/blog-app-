import { Outlet, Navigate, Link } from 'react-router-dom'


const AuthLayout = () => {
    const isAuthenticated = false;
  return (
    <>
    { isAuthenticated ? (
    <Navigate to="/"/>
    ) : (
    <>
      
      <section className='flex flex-1 flex-col justify-center items-center py-10'>
      
          <Link to='/'><p className='text-light-4 bg-off-white p-1 rounded-2xl text-sm absolute top-0 right-0 mt-2 mr-2'>skip for now </p></Link>
          <Outlet/>
          
       
        
        
      </section>
      <div className='hidden xl:block h-screen w-1/2 bg-primary-1 '>  </div>
      
    </>)}
    </>
  )
}

export default AuthLayout
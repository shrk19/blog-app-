import { Outlet, Navigate } from 'react-router-dom'


const AuthLayout = () => {
    const isAuthenticated = false;
  return (
    <>
    { isAuthenticated ? (
    <Navigate to="/"/>
    ) : (
    <>
      <section className='flex flex-1 flex-col justify-center items-center py-10'>
        <Outlet/>
      </section>
      <div className='hidden xl:block h-screen w-1/2 bg-primary-1 '> </div>
      
    </>)}
    </>
  )
}

export default AuthLayout
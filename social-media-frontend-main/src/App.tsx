import { Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import { Home } from './_root/pages'
import './index.css'
import RootLayout from './_root/RootLayout'
import { ConfigProvider } from 'antd'
import { UserContextProvider } from './_root/context/UserContext'

function App() {
  return (
    <UserContextProvider>

    
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          fontFamily: 'poppins',
          colorLink: '#877EFF',
          colorPrimary: '#5D5FEF',
          colorInfo: '#877EFF'          
        },
        components: {
          Button: {
            colorPrimary: '#5D5FEF',
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
    <main className='flex h-screen'>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/signin' element={<SignInForm/>} />
          <Route path='/signup' element={<SignUpForm/>} />
        </Route>
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>} />  
        </Route>
      </Routes>
    </main>
    </ConfigProvider>

    </UserContextProvider>
  )
}

export default App

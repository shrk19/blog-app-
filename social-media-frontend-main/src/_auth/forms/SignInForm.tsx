import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../_root/context/UserContext';


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
  


const SignInForm = () => {

  const {setUser} = useContext(UserContext)
  
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try{
      const response = await axios.post('http://localhost:5000/api/auth/signin', values, {"withCredentials" : true} );
      console.log(response.data) // comment 
      //
      setUser(response.data)
      
      setError(false)
      navigate("/")
    }catch(err){
      setError(true)
      console.log(err)
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
    
  return (
    
    <div className='flex flex-col w-1/2'>
    <img src='assets/images/tradeverse-high-resolution-logo-transparent.png' width={250} className='self-center py-3' ></img>
    
    <p className='small-semibold text-[#343a40] mb-3'>Welcome back!</p>
    
    <Form
    id='signin'
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
      <p className='tiny-medium text-[#adb5bd]'>USERNAME:</p>
      <Form.Item<FieldType>
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
      >
      <Input />
      </Form.Item>

      <p className='tiny-medium text-[#adb5bd]'>PASSWORD:</p>
      <Form.Item<FieldType>
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
      >
      <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      >
      <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
      <Button type='primary' htmlType="submit" className='w-full bg-primary-1 font-semibold text-white'>
          Sign In 
      </Button>
      </Form.Item>
      {error && <p className='text-red'>Some Error</p>}
    </Form>
    <p className='tiny-medium text-[#343a40] flex justify-center'>Not a member? <Link to="/signup" className='text-blue-500 font-bold'> Create Account</Link></p>
    </div>
  )
}

export default SignInForm
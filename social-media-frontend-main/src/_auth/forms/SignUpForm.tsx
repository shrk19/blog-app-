import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const SignUpForm = () => {
  
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try{
      const response = await axios.post('http://localhost:5000/api/auth/signup', values);
      console.log(response.data)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  

  return (
    <>
    <img src='assets/images/tradeverse-high-resolution-logo-transparent.png' width={250} className='self-center py-3' ></img>
    <div className='flex flex-col w-1/2'>
    <Form
    id='signup'
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
      <p className='tiny-medium text-[#adb5bd]'>EMAIL:</p>
      <Form.Item<FieldType>
      name="email"
      rules={[{ required: true, message: 'Required!' }]}
      >
      <Input />
      </Form.Item>

      <p className='tiny-medium text-[#adb5bd]'>USERNAME:</p>
      <Form.Item<FieldType>
      name="username"
      rules={[{ required: true, message: 'Required!' }]}
      >
      <Input />
      </Form.Item>

      <p className='tiny-medium text-[#adb5bd]'>PASSWORD:</p>
      <Form.Item<FieldType>
      name="password"
      rules={[{ required: true, message: 'Required!' }]}
      >
      <Input.Password />

      </Form.Item>
      <p className='tiny-medium text-[#343a40] mb-3'>By signing up, you confirm that you have read and accepted our <span className='text-blue-500 font-bold'>Terms of Service</span> and <span className='text-blue-500 font-bold'>Privacy Policy</span>.</p>
      
      <Form.Item>
      
      <Button type='primary' htmlType="submit" className='w-full bg-primary-1 font-semibold text-white my-5'>
          Create My Account 
      </Button>
      
      <p className='tiny-medium text-[#343a40] flex justify-center'>Already a member? <Link to="/signin" className='text-blue-500 font-bold'> Sign In</Link></p>
      </Form.Item>
    </Form>
    </div>
    </>
    
  )
}

export default SignUpForm
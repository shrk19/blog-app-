import { Input, Button, Form } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

type FieldType = {
    title?: string;
    body?: string;
    tags?: string;
};

const Create = () => {
    const [form] = Form.useForm();

    // const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     console.log('Change:', e.target.value);
    // };

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        try{
            const response = await axios.post('http://localhost:5000/api/posts/create', values, {"withCredentials" : true} );
            console.log(response.data)
            onReset();
        }catch(err){
          console.log(err)
        }
    };
      
    const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    
      
  return (
    <div className='flex flex-col w-full md:w-3/4'>
    <Form
    id='create-post'
    name="basic"
    form={form}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
        <p className='tiny-medium text-[#adb5bd]'>TITLE:</p>
        
        <Form.Item<FieldType>
        name="title"
        rules={[{ required: true, message: 'Required!' }]}
        >
        <TextArea 
            placeholder="Enter title here" 
            autoSize={{ minRows: 2 }}
            showCount maxLength={200} 
        />
        </Form.Item>

        <p className='tiny-medium text-[#adb5bd]'>BODY:</p>
        <Form.Item<FieldType>
        name="body"
        >
        <TextArea 
            placeholder="Enter body here" 
            autoSize={{ minRows: 6 }}
        />
        </Form.Item>

        <p className='tiny-medium text-[#adb5bd]'>TAGS (optional):</p>
        <Form.Item<FieldType>
        name="tags"
        >
        <Input 
            placeholder="Enter relatable tags seperated by commas. Eg. question , rant" 
            showCount maxLength={20} 
        />

        </Form.Item>
        

        <Form.Item>
        
        <Button type='primary' htmlType="submit" className='w-full md:w-1/3 bg-primary-1 font-semibold text-white my-5 '>
            Submit
        </Button>
        
        
        </Form.Item>
    </Form>
    </div>
  )
}

export default Create
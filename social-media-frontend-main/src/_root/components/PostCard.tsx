import { ProCard } from "@ant-design/pro-components"
import PostStats from "./PostStats"
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { Popconfirm, notification } from "antd";
import { PostContext } from "../context/PostContext";
import { QuestionCircleOutlined } from '@ant-design/icons';
import {URL} from '../../url'

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const PostCard = (props: {  
    _id: string;
    userId: string;
    username: string;
    title: string;
    body: string;
    tags: string[];
    likes: number;
    isLiked: boolean;
    isSaved: boolean;
    createdAt: string;
    updatedAt: string; }) => {

    const {posts, setPosts} = useContext(PostContext)

    const [api, contextHolder] = notification.useNotification();
    let msg = ''
    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
        message: msg,
        });
    };

    const handleEdit = () =>{
       console.log('edit functionality yet to be built')
    }
    const handleDelete = async (postId : String) => {
        try {
          const res = await axios.delete(URL+`/api/posts/${postId}`, {"withCredentials": true });
          if(res.status === 200){
            msg = 'Post deleted successfully'
            openNotificationWithIcon('success')
            setPosts(posts.filter(post => post._id !== postId));
          }else{
            msg = 'Error'
            openNotificationWithIcon('error')
          }
        } catch (error) {
            console.log(error)
        }
    }

    const handleConfirm = async () => {
        try {
          // Perform the deletion action here
          await handleDelete(props._id);
        } catch (error) {
          console.error(error);
        }
      };
     
  

    const {user} = useContext(UserContext)
  return (
    <ProCard className="post-card m-2 md:m-4" key={props._id}>
        {contextHolder}
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <img 
                src="/assets/icons/profile-placeholder.svg"
                alt="creator"
                className="rounded-full w-10 lg:h-10"
                />
                <div className="flex flex-col">
                    <p className="small-medium lg:base-medium text-dark-4">@{props.username}</p>
                    <div className="flex flex-start gap-2 text-light-3">
                        <p className="subtle-semibold lg:small-regular">
                          {props.createdAt} 
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                {user?._id === props.userId && <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} className="cursor-pointer ml-4" onClick={() => handleEdit()}/>}
                <Popconfirm 
                    title="Delete"
                    description="Are you sure to delete this post?"
                    onConfirm={handleConfirm}
                    okText="Yes"
                    cancelText="No"
                    okType="danger"
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                        {user?._id === props.userId && <img src="/assets/icons/delete.svg" alt="edit" width={20} height={20} className="cursor-pointer ml-4" />}
                </Popconfirm>
            </div>
        </div>

       
            <div className=" base-medium lg:body-bold py-5">
                <p>{props.title}</p>
            </div>
            <div className="h-18">
                <p>{props.body} </p>
            </div>
            <ul className="flex gap-1 mt-2">
                <li key={999} className="text-light-3">
                    {props.tags}
                </li>
            </ul>
        
        <PostStats _id={props._id} likes={props.likes} isLiked={props.isLiked} isSaved={props.isSaved} />
    </ProCard>
  )
}

export default PostCard
import axios from "axios";
import { useContext, useState } from "react";
import { notification } from 'antd';
import { UserContext } from "../context/UserContext";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const PostStats = (props: { likes: number; _id: string, isLiked: boolean, isSaved: boolean }) => {

    const {user, setUser} = useContext(UserContext)

    const [liked, setLiked] = useState(props.isLiked);
    const [saved, setSaved] = useState(props.isSaved);
    const [likes, setLikes] = useState(props.likes);

    const [api, contextHolder] = notification.useNotification();

    let msg = ''

    const openNotificationWithIcon = (type: NotificationType) => {
      api[type]({
        message: msg,
      });
    };
    
    const handleLike = async () => {
      try{
        if(user===null){
          msg = 'Sign in to like posts!'
          openNotificationWithIcon('error')
          return
        }
        const res = await axios.put(`http://localhost:5000/api/posts/like/${props._id}`, null, {"withCredentials" : true})
        if(res.status === 200){
          setLiked(!liked);
          setLikes(liked ? likes - 1 : likes + 1);

          // update user context
          const updatedUser = await axios.get(`http://localhost:5000/api/users/find/${user._id}`)
          setUser(updatedUser.data)
        }
      }catch(err){
        console.log(err)
      }
    };
    const handleSave = async () => {
      try {
        if(user===null){
          msg = 'Sign in to save posts!'
          openNotificationWithIcon('error')
          return
        }
        const res = await axios.put(`http://localhost:5000/api/posts/bookmark/${props._id}`, null, {"withCredentials" : true})
        if(res.status === 200){
          setSaved(!saved); // Toggle the saved state
          msg = !saved ? 'Post Bookmarked' : 'Post removed from bookmarks'
          openNotificationWithIcon('success')

          // update user context
          const updatedUser = await axios.get(`http://localhost:5000/api/users/find/${user._id}`)
          setUser(updatedUser.data)
        }
      } catch (error) {
        console.log(error)
      }
    };
    
  return (
    <div className="flex justify-between items-center py-3" key={props._id}>
      {contextHolder}
      <div className="flex gap-2 mr-5">
        <img 
        src={liked ? '/assets/icons/liked.svg' : '/assets/icons/like.svg'}
        alt={liked ? 'liked' : 'like'}
        onClick={handleLike}
        width={20}
        height={20}
        className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes}</p>
      </div>

      <div className="flex">
        <img 
        src={saved ? '/assets/icons/saved.svg' : '/assets/icons/save.svg'}
        alt={saved ? 'saved' : 'save'}
        width={20}
        height={20}
        onClick={handleSave}
        className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default PostStats
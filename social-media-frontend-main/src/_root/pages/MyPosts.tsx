import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { UserContext } from "../context/UserContext";
import { URL } from "../../url";

const MyPosts = () => {

  const [posts, setPosts] = useState([])
  const {user} = useContext(UserContext)
  const savedPostsByCurrentUser = user?.bookmarkedPosts || [] as string[];
  const likedPostsByCurrentUser = user?.likedPosts || [] as string[];
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = await axios.get(URL+"/api/users/myposts", {"withCredentials" : true});
          //console.log(res.data);  // comment 
          setPosts(res.data)
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
      fetchPosts();
    }, []);
    
  
    //console.log("My Posts:", posts); // comment 

  return (
    <div>
      {posts?.map(({_id, userId, username, title, body, tags, likes, createdAt, updatedAt }: {  
    _id: string; userId: string; username: string; title: string; body: string; tags: string[]; likes: number; createdAt: string; updatedAt: string; }) => (
    
    <PostCard
        key={_id}
        _id={_id}
        userId={userId}
        username={username}
        title={title}
        body={body}
        tags={tags}
        likes={likes}
        isLiked = {likedPostsByCurrentUser.includes(_id) ? true : false}
        isSaved = {savedPostsByCurrentUser.includes(_id) ? true : false}
        createdAt={createdAt} updatedAt={updatedAt}    />
  ))}

    </div>
  )
}

export default MyPosts
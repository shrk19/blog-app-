import { useContext, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { URL } from "../../url";

const Bookmark = () => {
  const {user} = useContext(UserContext)
  const [posts, setPosts] = useState([]);
  const likedPostsByCurrentUser = user?.likedPosts || [] as string[];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(URL+"/api/users/bookmarked", {"withCredentials" : true});
        //console.log(res.data);  // comment 
        setPosts(res.data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  
  //console.log("Bookmarked Posts:", posts); // comment 

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
        isSaved = {true}
        createdAt={createdAt} updatedAt={updatedAt}    />
    ))}
  </div>

  )
}

export default Bookmark
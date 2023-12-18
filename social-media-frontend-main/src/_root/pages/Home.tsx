import { useContext, useEffect } from "react"
import PostCard from "../components/PostCard"
import { UserContext } from "../context/UserContext";
import { PostContext } from "../context/PostContext";
import axios from "axios";


const Home = () => {
  const {posts, setPosts} = useContext(PostContext)
  const {user} = useContext(UserContext)
  const likedPostsByCurrentUser = user?.likedPosts || [] as string[];
  const savedPostsByCurrentUser = user?.bookmarkedPosts || [] as string[];

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts/"); 
        //console.log(res.data) // comment
        setPosts(res.data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
 
  return (
    <>
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
  </>
  )
}

export default Home



import { createContext, useState, ReactNode } from "react";

interface Post {
    // Define properties for your post object here
    _id: string,
    userId: string,
    username: string,
    title: string,
    body: string,
    tags: string[],
    likes: number,
    createdAt: string,
    updatedAt: string,
    __v: string
}

interface PostContextType { 
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

interface PostContextProviderProps {
    children: ReactNode;
}

export const PostContext = createContext<PostContextType>({ posts: [], setPosts: () => {} });

export function PostContextProvider({ children }: PostContextProviderProps){
    const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     getPosts();
//   }, []);

//   const getPosts = async () => {
//     try { 
//       const res = await axios.get(URL+"/api/posts/");
//       setPosts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}
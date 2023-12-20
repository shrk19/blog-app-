import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { URL } from "../../url";



interface User {
    // Define properties for your user object here
    bookmarkedPosts: [], 
    createdAt: string, 
    createdPosts: [], 
    email: string, 
    likedPosts: [], 
    password: string, 
    updatedAt: string, 
    username: string, 
    _id: string 
}

interface UserContextType { 
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType>({ user: null, setUser: () => null });

export function UserContextProvider({ children }: UserContextProviderProps){
    const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try { 
      const res = await axios.get(URL+"/api/auth/refetch", { withCredentials: true });
      console.log("after refetch  ",res.data) // comment
      setUser(res.data); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
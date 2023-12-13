
import { Bookmark, Home, Liked, MyPosts, MyAccount } from './pages';
  
const user = true
  export default {
    route: {
      path: '/',
      routes: user ? [
        {
          path: '/',
          name: 'Home',
          icon: "assets/icons/home.svg",
          component: <Home/> 
        },
        {
          path: '/likes',
          name: 'Likes',
          icon: "assets/icons/like.svg",
          component: <Liked/>
        },
        {
          path: '/bookmarks',
          name: 'Bookmarks',
          icon: "assets/icons/save.svg",
          component: <Bookmark/>,
        },
        {
          path: '/posts',
          name: 'Posts',
          icon: "assets/icons/posts.svg",
          component: <MyPosts/>,
        },
        {
          path: '/profile',
          name: 'MyAccount',
          icon: "assets/icons/follow.svg",
          component: <MyAccount/>,
        },
      ] : [
        {
          path: '/',
          name: 'Home',
          icon: "assets/icons/home.svg",
          component: <Home/> 
        }
      ],
    },
    location: {
      pathname: '/',
    },
    appList: [],
  };
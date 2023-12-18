import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { Bookmark, Home, Liked, MyPosts, MyAccount } from './pages';
import Create from './pages/Create';
  
const MyRoutes = () => {
  const {user} = useContext(UserContext);
  let flag = true
  if(user===null) flag = false

  //console.log(flag)

  const routes = flag ? [
    {
      path: '/',
      name: 'Home',
      icon: "assets/icons/home.svg",
      component: <Home/> 
    },
    {
      path: '/create',
      name: 'Create Posts',
      icon: "assets/icons/home.svg",
      component: <Create/> 
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
    },
  ];

  return {
    route: {
      path: '/',
      routes: routes,
    },
    location: {
      pathname: '/',
    },
    appList: [],
  };
};

export default MyRoutes;

// const user = true
// export default {
//     route: {
//       path: '/',
//       routes: user ? [
//         {
//           path: '/',
//           name: 'Home',
//           icon: "assets/icons/home.svg",
//           component: <Home/> 
//         },
//         {
//           path: '/create',
//           name: 'Create Posts',
//           icon: "assets/icons/home.svg",
//           component: <Create/> 
//         },
//         {
//           path: '/likes',
//           name: 'Likes',
//           icon: "assets/icons/like.svg",
//           component: <Liked/>
//         },
//         {
//           path: '/bookmarks',
//           name: 'Bookmarks',
//           icon: "assets/icons/save.svg",
//           component: <Bookmark/>,
//         },
//         {
//           path: '/posts',
//           name: 'Posts',
//           icon: "assets/icons/posts.svg",
//           component: <MyPosts/>,
//         },
//         {
//           path: '/profile',
//           name: 'MyAccount',
//           icon: "assets/icons/follow.svg",
//           component: <MyAccount/>,
//         },
//       ] : [
//         {
//           path: '/',
//           name: 'Home',
//           icon: "assets/icons/home.svg",
//           component: <Home/> 
//         },
       
//       ],
//     },
//     location: {
//       pathname: '/',
//     },
//     appList: [],
//   };
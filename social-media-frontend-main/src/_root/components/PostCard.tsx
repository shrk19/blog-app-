import { ProCard } from "@ant-design/pro-components"
import PostStats from "./PostStats"

const PostCard = (props: {  
    _id: string;
    userId: string;
    title: string;
    body: string;
    tags: string[];
    likes: number;
    createdAt: string;
    updatedAt: string; }) => {

     
  return (
    <ProCard className="post-card md:m-4">
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <img 
                src="/assets/icons/profile-placeholder.svg"
                alt="creator"
                className="rounded-full w-10 lg:h-10"
                />
                <div className="flex flex-col">
                    <p className="small-medium lg:base-medium text-dark-4">{props.userId}</p>
                    <div className="flex flex-start gap-2 text-light-3">
                        <p className="subtle-semibold lg:small-regular">
                          {props.createdAt} 
                        </p>
                    </div>
                </div>
            </div>
            <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} className="cursor-pointer"/>
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
        
        <PostStats _id={props._id} likes={props.likes} />
    </ProCard>
  )
}

export default PostCard
import { useState } from "react";

const PostStats = (props: { likes: number  }) => {

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    
      
        

    const handleLike = () => {
      setLiked(!liked); // Toggle the liked state
    };
    const handleSave = () => {
        setSaved(!saved); // Toggle the saved state
    };
    
  return (
    <div className="flex justify-between items-center py-3">
      <div className="flex gap-2 mr-5">
        <img 
        src={liked ? '/assets/icons/liked.svg' : '/assets/icons/like.svg'}
        alt={liked ? 'liked' : 'like'}
        onClick={handleLike}
        width={20}
        height={20}
        className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{props.likes}</p>
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
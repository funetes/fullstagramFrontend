import React , {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import PostPresenter from './PostPresenter';
import useInput from '../../Hooks/useInput';
const PostContainer = ({
  id,
  user,
  files,
  isLiked,
  likeCounts,
  comments,
  createdAt,
  location,
  caption
}) => { 
  const comment = useInput("");
  const [isLikedS,setIsLiked] = useState(isLiked);
  const [likeCountS,setLikeCounts] = useState(likeCounts);
  const [currentItem,setCurrentItem] = useState(0);
  const slider = () => {
    const total = files.length;
    if(currentItem === total - 1){
      setCurrentItem(0); 
    }else{
      setCurrentItem(currentItem+1); 
    }
  }
  useEffect(() => {
     setTimeout( () => slider() , 3000 );
  }, [currentItem]);
  
  return <PostPresenter
  id={id}
  user={user}
  files={files}
  isLiked={isLikedS}
  likeCounts={likeCountS}
  comments={comments}
  createdAt={createdAt}
  location={location}
  caption={caption}
  newComment={comment}
  setIsLike={setIsLiked}
  setLikeCounts={setLikeCounts}
  currentItem={currentItem}
  />
}


PostContainer.propTypes = {
  id:PropTypes.string.isRequired,
  user:PropTypes.shape({
    id:PropTypes.string.isRequired,
    avatar:PropTypes.string,
    username:PropTypes.string.isRequired
  }),
  files:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
  })),
  isLiked:PropTypes.bool.isRequired,
  likeCounts:PropTypes.number.isRequired,
  comments:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    user:PropTypes.shape({
      id:PropTypes.string.isRequired,
      username:PropTypes.string.isRequired
    })
  })),
  createdAt:PropTypes.string,
  currentItem:PropTypes.number
}

export default PostContainer;
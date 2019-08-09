import React from 'react';
import {gql} from 'apollo-boost';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import { useQuery } from 'react-apollo-hooks';
import Loader from '../Components/Loader';
import Post from '../Components/Post/PostContainer';

const SEE_FEED = gql`
{
  seeFeed{
    id
    location
    caption
    user{
      id
      avatar
      username
    }
    files{
      id
      url
    }
    isLiked
    likeCounts
    comments{
      id
      text
      user{
        id
        username
      }
    }
    createdAt
  }
}
`;
const Wapper = styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
`;

export default () => {
  const {data,loading} = useQuery(SEE_FEED);
  console.log(data);
  return (
    <Wapper>
      <Helmet>
        <title>Feed | Prismagram</title>
      </Helmet>
      { loading && <Loader/> }
      { !loading && data && data.seeFeed && data.seeFeed.map(post => (
        <Post
          key={post.id}
          id={post.id}
          user={post.user}
          files={post.files}
          isLiked={post.isLiked}
          likeCounts={post.likeCounts}
          comments={post.comments}
          createdAt={post.createdAt}
          location={post.location}
          caption={post.caption}       
        />))}
    </Wapper>
  );
};
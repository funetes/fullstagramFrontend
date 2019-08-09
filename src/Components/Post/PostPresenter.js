import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import FatText from '../FatText';
import Avatar from '../Avatar';
import { Comment, HeartEmpty, HeartFull } from '../Icons';

const Post = styled.div`
  ${props=>props.theme.whiteBox}
  width: 100%;
  max-width: 600px;
`;
const Header = styled.header`
  display:flex;
  align-items:center;
  padding: 15px;
`;
const UserColumn = styled.div`
  margin-left: 15px;
`;
const Location = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;
const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;
const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src}});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.showing ? 1 : 0};
  transition: opacity 0.5s
`;
const Meta = styled.div`
  padding: 15px;
`;
const Button = styled.span`
  cursor: pointer;
`;
const Buttons = styled.div`
 ${Button} {
   &:first-child{
      margin-right: 10px;
   }
 }
  margin-bottom: 10px;
`;
const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;`;
  const TextArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    resize :none;
    &:focus{
      outline:none;
    }
  `;
export default ({
  user:{
    username,
    avatar
  },
  location,
  files,
  isLiked,
  likeCounts,
  newComment,
  createdAt,
  currentItem
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar}/>
      <UserColumn>
        <FatText size={12} text={username}/>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files && files.map( (file,index) => <File key={file.id} src={file.url} showing={index===currentItem}/>)}
    </Files>
    <Meta>
      <Buttons>
        <Button>{ isLiked ? <HeartFull/> : <HeartEmpty/> }</Button>
        <Button><Comment/></Button>
      </Buttons>
      <FatText size={12} text={likeCounts === 1 ? '1 like': `${likeCounts} likes`}/>
      <Timestamp>{"2시간 전"}</Timestamp>
      <TextArea placeholder="Add a Comment..." {...newComment}/>
    </Meta>
  </Post>
)

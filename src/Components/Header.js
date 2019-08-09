import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import {gql} from  'apollo-boost';
import {Link,withRouter} from 'react-router-dom';
import useInput from '../Hooks/useInput';
import { Logo, Explore, HeartEmpty, User } from './Icons';
import { useQuery } from 'react-apollo-hooks';

const Header = styled.div`
  width: 100%;
  border-bottom : ${props => props.theme.boxBorder};
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 1;
  transition: height .2s ease-in-out;
  height: 77px;
  margin-bottom:65px;

`;
const HeaderWrapper = styled.div`
  margin : 0px auto;
  display: flex;
  flex-direction: row;
  height: 77px;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.theme.maxWidth};
  padding: 26px 20px;
  transition: height .2s ease-in-out;
  width: 100%;
`;

const HeaderColunm = styled.div`
  width: 33%;
  text-align:center;
  &:first-child{
    text-align : left;
  }
  &:last-child{
    text-align : right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 70%;
  outline: none;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const ME = gql`
  {
    me {
      user{
        username
      }
      posts{
        id
      }
    }
  }
`;

export default withRouter(({history}) => {
    const search = useInput("");
    // 로그인 후 부여받은 토큰을 서버에 보내야한다.  apollo client -> header Property에서 가능함.
    const {data:{me}} = useQuery(ME);
    const onSearchSubmit = (e) => {
      e.preventDefault();
      // redirect to search Component with search term
      history.push(`/search?term=${search.value}`);
    }
    return(
      <Header>
      <HeaderWrapper>
        <HeaderColunm>
          <Link to="/">
            <Logo/>
          </Link>
        </HeaderColunm>
        <HeaderColunm>
          <form onSubmit={onSearchSubmit}>
            <SearchInput placeholder = "search" {...search}/> 
          </form>
        </HeaderColunm>
        <HeaderColunm>
          <HeaderLink to="/explore">
            <Explore/>
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty/>
          </HeaderLink>
          {(!me)?<HeaderLink to="/#">
            <User/>
          </HeaderLink>:
          <HeaderLink to={me.user.username}>
            <User/>
          </HeaderLink>}
        </HeaderColunm>
      </HeaderWrapper>
    </Header>
    )
  }
);
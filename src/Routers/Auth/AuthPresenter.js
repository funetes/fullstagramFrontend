import React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box = styled.div`
  ${props => props.theme.whiteBox}
  width: 100%;
  max-width: 350px;
`;
const StateChanger = styled(Box)`
  text-align : center;
  padding : 20px 0px;
`;

const Link = styled.span`
  color : ${props=> props.theme.blueColor};
  cursor:pointer;
`;

// reuse Box(10line) style
// 자식 컴포넌트의 태그도 컨트롤이 가능하다. (중요)
// 자식 컴포넌트를 컨트롤하는 범위를 정해야함. 
//(위치, 크기정도. 나머지는 그 컴포넌트 자체에서 정의한다.)
const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom :15px;
  form{
    /* width: 100%; */
    input{
      width:100%;
      &:not(:last-child){
        margin-bottom: 7px;
      }
    }
    button{
      margin-top: 10px;
    }
  }
`;


export default ({action,username,firstname,lastname,email,setAction,onSubmit,secret})=>{  
  return (
    <Wrapper>
      {/* <Form> component는 form tag로 만든것이 아닌 단순 div tag임 */}
      <Form>
        {action === 'login' && (
           <>
            <Helmet>
              <title>Log In | Prismagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder={"Email"} {...email} type="email"/>
              <Button text={"Log in"} />   
            </form>
          </>
          )}
        {action === 'signUp'&& (
          <>
            <Helmet>
              <title>Sign Up | Prismagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder={"First Name"} {...firstname}/>
              <Input placeholder={"Last Name"} {...lastname}/>
              <Input placeholder={"Email"} {...email} type="email"/>
              <Input placeholder={"Username"} {...username}/>
              <Button text={"Sign up"}/>
            </form>
          </>
          )}
        {action === 'secret' && (
          <>
            <Helmet>
              <title>Confirm Secret | Prismagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder={"Paste your secret"} {...secret}/>
              <Button text={"Confirm"} />   
            </form>
          </>
          )}
      </Form>
     {action !== 'secret' && (
       <StateChanger>
       {action === 'login' && (
          <>
            Don't have an account?{" "}
            <Link onClick={()=>setAction('signUp')}>SignUp</Link>
          </>)}
        {action === 'signUp' && (
          <>
            Have an account?{" "}
            <Link onClick={()=>setAction('login')}>LogIn</Link>
          </>)}
        </StateChanger>
     )}
    </Wrapper>
  )
}
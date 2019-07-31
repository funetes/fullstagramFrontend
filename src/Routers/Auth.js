import React, {useState} from 'react';
import styled from 'styled-components';
import Input from '../Components/Input';
import Button from '../Components/Button';
import useInput from '../Hooks/useInput';

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


//isLoggedIn = false;
export default ()=>{
  const [action,setAction] = useState('login');
  const username = useInput("");
  console.log(username);
  return (
    <Wrapper>
      {/* <Form> component는 form tag로 만든것이 아닌 단순 div tag임 */}
      <Form>
        {action === 'login' ? (
          <form>
            <Input placeholder={"Username"} {...username}/>
            <Input placeholder={"Password"}/>
            <Button text={"Log in"}/>
          </form>
        ):(
          <form>
            <Input placeholder={"First Name"}/>
            <Input placeholder={"Last Name"}/>
            <Input placeholder={"Email"}/>
            <Input placeholder={"Username"}/>
            <Input placeholder={"Password"}/>
            <Button text={"Sign up"}/>
          </form>
        )}
      </Form>
     <StateChanger>
       {action === 'login' ? (
         <>
            Don't have an account?{" "}
            <Link onClick={()=>setAction('signUp')}>SignUp</Link>
         </>
       ):(
        <>
            Have an account?{" "}
            <Link onClick={()=>setAction('login')}>LogIn</Link>
        </>
       )}
     </StateChanger>
    </Wrapper>
  )
}
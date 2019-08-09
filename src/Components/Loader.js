import React from 'react';
import styled,{keyframes} from 'styled-components';
import { Logo } from './Icons';

const animation = keyframes`
  0%{
    opacity:0;
  }50%{
    opacity:1;
  }100%{
    opacity:0;
  }
`;

const Loader = styled.div`
  animation : ${animation} 1s infinite;
`;

export default () => (
  <Loader>
    <Logo size={36}/> 
  </Loader>
)
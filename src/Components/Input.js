import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

// 함수처럼 컴포넌트 정의해주면됨.
const Input = ({placeholder,value,onChange}) => 
  <Container 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
    required/>;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
};
// component 를 가지는 함수를 전한다.
export default Input;
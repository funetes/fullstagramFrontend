import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.div`
  font-weight:600;
  font-size: ${props => props.size}px;
`;

const FatText = ({text,size = 12}) => (<Text size={size}>{text}</Text>);

FatText.propTypes = {
  text:PropTypes.any.isRequired,
  size:PropTypes.number
}

export default FatText
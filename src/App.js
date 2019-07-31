import React from 'react';
import styled,{ThemeProvider} from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Theme from './Styles/Theme';
import Router from '../src/Components/Router';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';
import Footer from './Components/Footer';

//defaults 에서 불러옴
const IS_LOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;


export default () => {
  //call the query and get the data
  const { data: {isLoggedIn} } = useQuery(IS_LOGGEDIN);
  return (
    <ThemeProvider theme={Theme}>
    <Wrapper>
      <GlobalStyles/>
      <Router isLoggedIn={isLoggedIn}/>
      <Footer/>
    </Wrapper>
  </ThemeProvider>
  )
};

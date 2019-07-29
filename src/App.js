import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import Theme from './Styles/Theme';
import Router from '../src/Components/Router';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';

const IS_LOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;


export default () => {
  const { data: isLoggedIn } = useQuery(IS_LOGGEDIN);
  console.log(isLoggedIn);
  return (
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles/>
      <Router isLoggedIn={isLoggedIn}/>
    </>
  </ThemeProvider>
  )
};

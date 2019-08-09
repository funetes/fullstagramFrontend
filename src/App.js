import React from 'react';
import styled,{ThemeProvider} from 'styled-components';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './Styles/GlobalStyles';
import Footer from './Components/Footer';
import Theme from './Styles/Theme';
import Routes from '../src/Components/Router';
import Header from './Components/Header';
import {HashRouter as Router} from 'react-router-dom';
//defaults 에서 불러옴
const IS_LOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;


export default () => {
  //call the query and get the data
  const { data: {isLoggedIn} } = useQuery(IS_LOGGEDIN);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles/>
        <Router>
          <>
            <Header/>
            <Wrapper>
              <Routes isLoggedIn={isLoggedIn}/>
              <Footer/>
            </Wrapper>
          </>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
      </>
  </ThemeProvider>
  )
};

import ApolloClient from 'apollo-boost';
import { resolvers,defaults } from './LocalState';

const client = new ApolloClient({
  uri:"http://localhost:4000",
  clientState:{
    resolvers,
    defaults
  }
});


export default client;
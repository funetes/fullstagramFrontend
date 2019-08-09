import ApolloClient from 'apollo-boost';
import { resolvers,defaults } from './LocalState';

const client = new ApolloClient({
  uri:"http://localhost:4000",
  clientState:{
    resolvers,
    defaults
  },
  headers:{
    "Authorization" : `Bearer ${localStorage.getItem("token")}`
    }
});


export default client;
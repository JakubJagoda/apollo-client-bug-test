import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';

// global state to be used by the resolver
declare global {
    interface Window {
        __SOMETHING__: boolean;
    }
}

const typeDefs = `
  type Hello {
    message: String
  }
  
  type Query {
    getHello: Hello
  }
`;

const resolvers = {
    Query: {
        getHello: () => {
            if (window.__SOMETHING__) {
                return {
                    message: 'hello world'
                };
            }

            throw new Error('Error!')
        }
    }
};

const client = new ApolloClient({
    link: new SchemaLink({
        schema: makeExecutableSchema({
            typeDefs,
            resolvers
        })
    }),
    cache: new InMemoryCache()
});

const App = () => (
    <ApolloProvider client={client}>
        <ComponentA />
        <ComponentB />
    </ApolloProvider>
);

export default App;

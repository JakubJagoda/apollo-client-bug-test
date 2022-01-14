import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
    query GetHelloQuery {
        getHello {
            message
        }
    }
`;

export const useGetMessage = () => {
    const { loading, error, data, refetch } = useQuery(QUERY, {
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-only',
    });

    return { loading, error, data, refetch };
}
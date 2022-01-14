import { useGetMessage } from './useGetMessage';

export const ComponentB = () => {
    const {loading, error, data} = useGetMessage();
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {JSON.stringify(error ? error.graphQLErrors[0].message : data.getHello.message)}
        </div>
    )
}
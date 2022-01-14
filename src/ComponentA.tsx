import { useGetMessage } from './useGetMessage';

export const ComponentA = () => {
    const {loading, error, data, refetch} = useGetMessage();
    if (loading) return <p>Loading...</p>;

    const onClick = () => {
        window.__SOMETHING__ = true;
        refetch();
    }

    return (
        <div>
            {JSON.stringify(error ? error.graphQLErrors[0].message : data.getHello.message)}
            <button onClick={onClick}>
                Click to set variable and refetch
            </button>
        </div>
    )
}
import { useQuery } from '@apollo/client'
//gql - used to make the query
//useQuery - to use it in the component, obtain the data,
//the loading state and any data
import ClientRow from './ClientRow';
import Spinner from './assets/Spinner'
import { GET_CLIENTS } from '../queries/clientQueries'

export default function Clients(){
    const { loading, error, data } = useQuery(GET_CLIENTS)

    //before returning the clients we'll check to see if it's loading
    if(loading) return <Spinner />
    if(error) return <p>Something went wrong...</p>
    //make sure to initiate cors on server-side



    return (
        <>
        {!loading && !error && (
        <table className="table table-hover mt-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client =>{
                   return <ClientRow key={client.id} client={client}/>
                })}
            </tbody>
        </table>
        )}
        </>
    )
}
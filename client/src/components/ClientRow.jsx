import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'
import { GET_PROJECTS } from '../queries/projectQueries'

export default function ClientRow({ client }){
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
       /*one way ^^ to display the clients immediately after the onClick is to refetch the GET_CLIENTS query */
       /*if you do this too much, however you may start to bog down your application */
       /*another way is to update the cache */
    //    update(cache, { data: { deleteClient } }){
    //     const { clients } = cache.readQuery({
    //         query: GET_CLIENTS
    //     });
    //     cache.writeQuery({
    //         query: GET_CLIENTS,
    //         data: { clients: clients.filter(client => client.id !== deleteClient.id)},
    //     });
        /*this method updates the cache */
        /*it used the update function and pass in cache and sets the data to the response of deleteClient. It's getting the query from the cache and not making a whole new request. We ill then rewrite the cache. 
        we'll set the clients to filter out the client that matches the id of the one that we want to delete.*/
    });

    return(
        <tr>
            <td>{ client.name }</td>
            <td>{ client.email }</td>
            <td>{ client.phone }</td>
            <td>
                {/*the onClick properly deletes from the database but doesn't display properly in the IU unless you refresh the page. */}
                <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}
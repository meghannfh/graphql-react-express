import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import Spinner from './assets/Spinner'
import ProjectCard from "./ProjectCard";


export default function Projects(){
const { loading, error, data } = useQuery(GET_PROJECTS);

if (loading) return <Spinner />;
if (error) return <p>Something Went Wrong</p>;

    return (
        <div>
            {data.projects.length > 0 ? (
                <div className="mt-3 row">
                    { data.projects.map((project) => {
                        return <ProjectCard key={project.id} project={project} />
                    })}
                </div>
            ) : (<p>No Projects</p>)}
        </div>
    )
}
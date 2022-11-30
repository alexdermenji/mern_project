import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import ProjectCard from './ProjectCard';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function Projects() {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}

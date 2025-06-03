import { useAppContext } from "../contexts/types";
import ContentContainer from "./ContentContainer";

const ProjectsComponent = () => {
const { state } = useAppContext();
  return (
    <ContentContainer label="Projects" isLoading={state.projects===null}>
      <ul className="space-y-6">
            {state.projects?.map((project, i) => (
              <li
                key={i}
                className="bg-[#181818] rounded-xl shadow p-5 transition hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 leading-relaxed tracking-tight mb-3">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#F2CDA1] underline hover:opacity-80 transition"
                  >
                    View GitHub Repository →
                  </a>
                )}
              </li>
            ))}
          </ul>
    </ContentContainer>
  );
};
export default ProjectsComponent;
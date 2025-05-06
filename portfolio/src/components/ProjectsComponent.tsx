import { useEffect, useState } from "react";
import { LoadingPoints } from "./widgets/LoadingPoints";
import { useAppContext } from "../contexts/types";

const ProjectsComponent = () => {
const { state } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(state.projects === null);
  }, [state]);

  return (
    <div className="w-full sm:w-[50vw] p-6 sm:p-12 flex justify-center items-start h-full">
      <div className="flex flex-col gap-8 pb-4">
        <h1 className="text-3xl font-bold border-b-2 border-[#F2CDA1] pb-2">
          Projects
        </h1>

        {isLoading ? (
          <LoadingPoints />
        ) : (
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
        )}
      </div>
    </div>
  );
};
export default ProjectsComponent;
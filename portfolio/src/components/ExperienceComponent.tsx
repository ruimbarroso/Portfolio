import { useAppContext } from "../contexts/types";
import ContentContainer from "./ContentContainer";

const ExperiencesComponent = () => {
  const { state } = useAppContext();


  return <ContentContainer label="Experience" isLoading={state.experiences===null}>
      <ul className="space-y-6">
            {state.experiences?.map((experience, i) => (
              <li
                key={i}
                className="bg-[#181818] rounded-xl shadow p-4 transition hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-white mb-1">
                  {experience.title}
                </h2>
                <p className="text-gray-300 leading-relaxed tracking-tight mb-4">
                  {experience.description}
                </p>
                <ul className="space-y-2 pl-5">
                  {experience.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="text-gray-300 list-disc tracking-tight leading-relaxed"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
    </ContentContainer>;
};

export default ExperiencesComponent;
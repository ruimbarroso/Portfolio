import { useEffect, useState } from "react";
import { LoadingPoints } from "./widgets/LoadingPoints";
import { useAppContext } from "../contexts/types";

const ExperiencesComponent = () => {
  const { state } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(state.experiences === null);
  }, [state]);

  return (
    <div className="w-full sm:w-[50vw] p-6 sm:p-12 flex justify-center items-start h-full">
      <div className="flex flex-col gap-8 pb-4">
        <h1 className="text-3xl font-bold border-b-2 border-[#F2CDA1] pb-2">
          Experience
        </h1>

        {isLoading ? (
          <LoadingPoints />
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default ExperiencesComponent;
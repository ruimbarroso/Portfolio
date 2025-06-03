import { useAppContext } from "../contexts/types";
import ContentContainer from "./ContentContainer";

const SkillsComponent = () => {
  const { state } = useAppContext();

  return (
    <ContentContainer label="Skills" isLoading={state.skills===null}>
      <ul className="space-y-6">
        {state.skills?.map((skill, i) => (
          <li key={i} className="bg-[#181818] rounded-xl shadow p-4 transition hover:shadow-md">
            <h2 className="text-xl font-semibold text-white mb-1">{skill.title}</h2>
            <p className="text-gray-300 leading-relaxed tracking-tight">
              {skill.description}
            </p>
          </li>
        ))}
      </ul>
    </ContentContainer>
  );
};
export default SkillsComponent;
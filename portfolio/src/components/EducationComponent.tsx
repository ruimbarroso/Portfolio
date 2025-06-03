import { useAppContext } from "../contexts/types";
import ContentContainer from "./ContentContainer";


const EducationComponent = () => {
    const { state } = useAppContext();

    return (
        <ContentContainer label="Education" isLoading={state.colleges===null || state.courses===null}>
            <ul className="space-y-6">
                {/* Colleges */}
                {state.colleges?.map((college, i) => (
                    <li
                        key={i}
                        className="bg-[#181818] rounded-xl shadow-lg p-6"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">{college.title}</h2>
                        <p className="text-gray-300 mb-3">{college.description}</p>
                        <div className="text-sm text-gray-300 mb-2">
                            {new Date(college.initDate).toLocaleDateString()} – {new Date(college.endDate).toLocaleDateString()}
                        </div>
                        {college.certLink && (
                            <a
                                href={college.certLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[#F2CDA1] underline hover:opacity-80 transition"
                            >
                                🎓 View Diploma
                            </a>
                        )}
                    </li>
                ))}

                {/* Courses */}
                <li>
                    <h3 className="text-xl font-semibold text-white mb-3">Complementary Courses</h3>
                    <ul className="space-y-4">
                        {state.courses?.map((course, i) => (
                            <li key={i} className="bg-[#181818] rounded-lg p-4 shadow hover:shadow-md transition">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                    <div>
                                        <h4 className="text-lg text-white font-medium">{course.title}</h4>
                                        <p className="text-gray-300 text-sm">{course.description}</p>
                                    </div>
                                    <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                                        {course.certLink && (
                                            <a
                                                href={course.certLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[#F2CDA1] underline hover:opacity-80 transition w-30"
                                            >
                                                📄 Certificate
                                            </a>
                                        )}
                                        {course.courseLink && (
                                            <a
                                                href={course.courseLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[#F2CDA1] underline hover:opacity-80 transition w-30"
                                            >
                                                🔗 Course Page
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </ContentContainer>
    );
};
export default EducationComponent;

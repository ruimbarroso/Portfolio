import { useAppContext } from "../../contexts/types";

export const MainContent = () => {
    const { element } = useAppContext();
    return <main className="bg-[#1E1E1E] text-white flex flex-col sm:flex-row justify-start sm:justify-around items-center w-screen h-[calc(100vh-4rem)] sm:h-[calc(100vh-7rem-7rem)] md:h-[calc(100vh-4rem-7rem)] p-0 m-0 overflow-y-scroll">
        {element}
    </main>

};
export default MainContent;
import { useAppContext } from "../contexts/types";

const GreettingComponent = () => {
    const { state } = useAppContext();

    return (
        <div className="box-border w-screen sm:w-[50vw] p-6 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
                <div className="space-y-1">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">Hi,</h1>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">I'm Rui,</h1>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">Software Engineer.</h1>
                </div>

                <a href={state.resumeUrl ?? "#"} target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#181818] text-white w-[140px] h-[40px] px-6 py-2 rounded-lg border border-[#F2CDA1] hover:bg-[#F2CDA1] hover:text-black transition cursor-pointer">
                        Resume
                    </button>
                </a>
                <a href="mailto:rmpereirab@gmail.com">
                    <button className="bg-[#181818] text-white w-[140px] h-[40px] px-6 py-2 rounded-lg border border-[#F2CDA1] hover:bg-[#F2CDA1] hover:text-black transition cursor-pointer">
                        Contact Me
                    </button>
                </a>
            </div>
        </div>
    );
};

export default GreettingComponent;
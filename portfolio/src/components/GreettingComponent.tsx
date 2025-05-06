
const GreettingComponent = () => {
    return <div className="box-border w-screen sm:w-[50vw] p-6 flex justify-center">
        <div className="flex flex-col gap-3">
            <div className="space-y-1">
                <h1 className="text-3xl font-semibold">Hi,</h1>
                <h1 className="text-3xl font-semibold">I'm Rui,</h1>
                <h1 className="text-3xl font-semibold">Software Engineer.</h1>
            </div>

            <a href="https://drive.google.com/file/d/1yBkQeSdovj1l6GX08r8spoiEGe5rqavu/view?usp=sharing">
                <div className="bg-[#181818] text-white w-[100px] h-[40px] flex items-center justify-center rounded-[3px] hover:bg-[#F2CDA1]">
                    Resume
                </div>
            </a>
            <a href="mailto:rmpereirab@gmail.com">
                <div className="bg-[#181818] text-white w-[100px] h-[40px] flex items-center justify-center rounded-[3px] hover:bg-[#F2CDA1]">
                    Contact me
                </div>
            </a>
        </div>
    </div>
};
export default GreettingComponent;

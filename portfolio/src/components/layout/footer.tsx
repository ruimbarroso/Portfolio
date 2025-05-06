import { IoCallOutline, IoMailOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {

    return (
        <footer className="bg-[#181818] text-white justify-around items-center hidden h-[7rem] w-screen  sm:flex flex-row m-0 p-0">
            <div className="m-0 p-0 flex flex-col items-center">
                <p className='m-[5px]'>Rui Miguel Pereira Barroso</p>
                <p className='m-[5px]'>2025</p>
            </div>

            <div className="m-0 p-0 flex flex-col ">
                <div className="flex items-center gap-2 hover:text-[#F2CDA1]">
                    <IoCallOutline />
                    <a href="#">919762092</a>
                </div>
                <div className="flex items-center gap-2 hover:text-[#F2CDA1]">
                    <IoMailOutline />
                    <a href="mailto:rmpereirab@gmail.com">rmpereirab@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 hover:text-[#F2CDA1]">
                    <IoLogoGithub />
                    <a href="https://github.com/ruimbarroso">ruimbarroso</a>
                </div>
                <div className="flex items-center gap-2 hover:text-[#F2CDA1]">
                    <IoLogoLinkedin />
                    <a href="https://www.linkedin.com/in/ruimbarroso">Rui Barroso</a>
                </div>
            </div>
        </footer>
    );
};
export default Footer
import {
  IoCallOutline,
  IoMailOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const ContactsComponent = () => {
  return (
    <div className="w-full sm:w-[50vw] p-6 sm:p-12 flex justify-center items-start">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-3xl font-bold border-b-2 border-[#F2CDA1] pb-2">
          Contact
        </h1>

        <div className="flex flex-col space-y-4 text-lg">
          {/* Phone */}
          <div className="flex items-center gap-3 group transition-colors">
            <IoCallOutline className="text-white group-hover:text-[#F2CDA1]" />
            <a
              href="#"
              className="text-white group-hover:text-[#F2CDA1] transition-colors"
            >
              919762092
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 group transition-colors">
            <IoMailOutline className="text-white group-hover:text-[#F2CDA1]" />
            <a
              href="mailto:rmpereirab@gmail.com"
              className="text-white group-hover:text-[#F2CDA1] transition-colors"
            >
              rmpereirab@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-3 group transition-colors">
            <IoLogoGithub className="text-white group-hover:text-[#F2CDA1]" />
            <a
              href="https://github.com/ruimbarroso"
              className="text-white group-hover:text-[#F2CDA1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ruimbarroso
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 group transition-colors">
            <IoLogoLinkedin className="text-white group-hover:text-[#F2CDA1]" />
            <a
              href="https://www.linkedin.com/in/ruimbarroso"
              className="text-white group-hover:text-[#F2CDA1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rui Barroso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsComponent;
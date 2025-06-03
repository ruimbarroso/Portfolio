import {
  IoCallOutline,
  IoMailOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import ContentContainer from "./ContentContainer";

const ContactsComponent = () => {
  return <ContentContainer label="Contacts" isLoading={false}>
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
              href="https://www.linkedin.com/in/rui-barroso-1a179b306/"
              className="text-white group-hover:text-[#F2CDA1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rui Barroso
            </a>
          </div>
        </div>
    </ContentContainer>;
};

export default ContactsComponent;
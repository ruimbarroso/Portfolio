import { useState, type JSX } from "react";
import ContactsComponent from "../ContactsComponent";
import ExperiencesComponent from "../ExperienceComponent";
import HomeComponent from "../HomeComponent";
import ProjectsComponent from "../ProjectsComponent";
import SkillsComponent from "../SkillsComponent";
import { useAppContext } from "../../contexts/types";


const pages = [
    { name: "Skills", element: <SkillsComponent /> },
    { name: "Experience", element: <ExperiencesComponent /> },
    { name: "Projects", element: <ProjectsComponent /> },
    { name: "Contact", element: <ContactsComponent /> },
];

const TopBar = () => {
    const { setElement } = useAppContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (element: JSX.Element) => {
        setElement(element);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-[#181818] text-white w-full px-4 py-3 sm:py-4 h-[4rem] sm:h-[7rem] md:h-[4rem]">
            {/* Top Row: Title + Menu Button (Mobile) */}
            <div className="flex items-center justify-between">
                <button onClick={() => setElement(<HomeComponent />)}>
                    <h1 id="title" className="text-xl sm:text-2xl font-bold hover:text-[#F2CDA1] cursor-pointer">
                        Rui Barroso
                    </h1>
                </button>

                {/* Mobile menu toggle */}
                <button
                    className="sm:hidden cursor-pointer"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Navigation links*/}
            {/* Mobile menu (toggle) */}
            {isMenuOpen && (
                <nav className="flex flex-col items-start mt-2 space-y-2 sm:hidden z-10 absolute top-[3rem] left-0 w-screen m-0 p-0 bg-[#181818]">
                    {pages.map((page) => (
                        <button
                            key={page.name}
                            onClick={() => handleNavClick(page.element)}
                            className="w-full text-left px-2 py-1 hover:text-[#F2CDA1] cursor-pointer"
                        >
                            {page.name}
                        </button>
                    ))}
                </nav>
            )}

            {/* Medium layout: nav below title */}
            <nav className="hidden sm:flex md:hidden flex-wrap gap-4 mt-3">
                {pages.map((page) => (
                    <button
                        key={page.name}
                        onClick={() => handleNavClick(page.element)}
                        className="px-3 py-1 hover:text-[#F2CDA1] cursor-pointer"
                    >
                        {page.name}
                    </button>
                ))}
            </nav>

            {/* Large layout: title left, nav right */}
            <nav className="hidden md:flex items-center justify-end gap-4 absolute right-6 top-4">
                {pages.map((page) => (
                    <button
                        key={page.name}
                        onClick={() => handleNavClick(page.element)}
                        className="px-3 py-1 hover:text-[#F2CDA1] cursor-pointer"
                    >
                        {page.name}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default TopBar;
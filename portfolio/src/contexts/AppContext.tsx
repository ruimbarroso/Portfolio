import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import HomeComponent from "../components/HomeComponent";
import { AppContext, type AppState, type College, type Course, type Experience, type Project, type Skill } from "./types";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [element, setElement] = useState<ReactNode>(<HomeComponent />);
  const [state, setState] = useState<AppState>({
    resumeUrl: null,
    homeContent: null,
    skills: null,
    experiences: null,
    colleges: null,
    courses: null,
    projects: null
  });

  const isDataLoaded = useRef(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isDataLoaded.current) return;
        const [resumeUrl, homeContent, skills, experiences, projects, colleges, courses] = await Promise.all([
          fetchResumeUrl(),
          fetchHomeContent(),
          fetchSkills(),
          fetchExperience(),
          fetchProjects(),
          fetchColleges(),
          fetchCourses()
        ]);

        setState({ resumeUrl, homeContent, skills, experiences, projects, colleges, courses });
      } catch (error) {
        console.error("Error Loading App Data:", error);
        setState({
          resumeUrl: "#",
          homeContent: [],
          skills: [],
          experiences: [],
          projects: [],
          colleges: [],
          courses: [],
        });
      } finally {
        console.log(isDataLoaded.current ? "Loading Data again..." : "Loading Data...");
        isDataLoaded.current = true;
      }
    };

    fetchData();
  }, []);

  const fetchResumeUrl = useCallback(async (): Promise<string> => {
    try {
      const querySnapshot = await getDocs(collection(db, "resume"));

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        console.log("Data: ", docData);
        return docData.url as unknown as string;
      }
    } catch (error) {
      console.error("Error fetching home content:", error);
    }

    return "#"
  }, []);
  const fetchHomeContent = useCallback(async (): Promise<string[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "home"));

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        return Object.values(docData) as string[];
      }
    } catch (error) {
      console.error("Error fetching home content:", error);
    }

    return []
  }, []);
  const fetchSkills = useCallback(async (): Promise<Skill[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "skills"));

      if (!querySnapshot.empty) {
        const docs = querySnapshot.docs.map((doc) => doc.data() as Skill);
        return docs;
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
    return [];
  }, []);
  const fetchExperience = useCallback(async (): Promise<Experience[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "experience"));

      if (!querySnapshot.empty) {
        const docs = querySnapshot.docs.map((doc) =>
          doc.data() as Experience
        );
        return docs;
      }
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
    return [];
  }, []);
  const fetchProjects = useCallback(async (): Promise<Project[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));

      if (!querySnapshot.empty) {
        const docs = querySnapshot.docs.map(
          (doc) => doc.data() as Project
        );
        return docs;
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    return [];
  }, []);
  const fetchColleges = useCallback(async (): Promise<College[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "colleges"));

      if (!querySnapshot.empty) {
        const docs = querySnapshot.docs.map((doc) => doc.data() as College);
        return docs;
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
    return [];
  }, []);
  const fetchCourses = useCallback(async (): Promise<Course[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));

      if (!querySnapshot.empty) {
        const docs = querySnapshot.docs.map((doc) => doc.data() as Course);
        return docs;
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
    return [];
  }, []);

  return (
    <AppContext.Provider value={{
      element, setElement, state: state
    }}>
      {children}
    </AppContext.Provider>
  );
};


export default AppProvider;
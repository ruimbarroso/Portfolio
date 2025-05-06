
import { lazy, Suspense } from "react";
const MainContent = lazy(() => import("./components/layout/content"));
const Footer = lazy(() => import("./components/layout/footer"));
const TopBar = lazy(() => import("./components/layout/topbar"));
import LoadingPage from "./components/LoadingPage";
const AppProvider = lazy(() => import("./contexts/AppContext"));

function App() {
  return (<Suspense fallback={<LoadingPage />}>
    <AppProvider>
      <Suspense fallback={<LoadingPage />}><TopBar /></Suspense>
      <Suspense fallback={<LoadingPage />}><MainContent /></Suspense>
      <Suspense fallback={<LoadingPage />}><Footer /></Suspense>
    </AppProvider>
  </Suspense>);
}

export default App;


/*
top
h-[4rem] sm:h-[7rem] md:h-[4rem]

content
h-[calc(100vh-4rem)] sm:h-[calc(100vh-7rem-7rem)] md:h-[calc(100vh-4rem-7rem)]

bottom
hidden sm:flex h-[7rem]

*/
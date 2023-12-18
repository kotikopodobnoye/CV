import AboutMe from "./components/sections/AboutMe";
import Contacts from "./components/sections/Contacts";
import Education from "./components/sections/Education";
import Footer from "./components/sections/Footer";
import Languages from "./components/sections/Languages";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="mx-4 pt-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16">
      <AboutMe />
      <div className="flex flex-col mt-4 gap-3 sm:flex-row sm:mt-6 md:mt-8">
        <div className="flex flex-col gap-4 py-2">
          <Contacts />
          <Languages />
          <Skills />
        </div>
        <div className="w-[1px] bg-black/50 hidden sm:block mx-4 sm:mx-6 md:mr-8 lg:mr-12 xl:mr-16"></div>
        <div className="flex flex-col gap-2 py-2">
          <Projects />
          <Education />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

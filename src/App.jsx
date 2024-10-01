// App.jsx
import "./main";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";
import { JavaScriptFrameworksCA } from "./components/projects/JavaScriptFrameworksCA";
import { ProjectExam2 } from "./components/projects/ProjectExam2";
import { SemesterProject2 } from "./components/projects/SemesterProject2";

function App() {
  return (
    <main className="grid gap-8">
      {/* Introduction */}
      <section className="grid-rows-3 md:grid-cols-3 md:text-left md:items-center">
        <Header />
        <Intro />
        <Skills />
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <div>
          <JavaScriptFrameworksCA />
          <SemesterProject2 />
          <ProjectExam2 />
        </div>
      </section>

      {/* Footer */}
      <section>
        <h2 className="text-2xl mt-2">Contact me</h2>
      </section>
    </main>
  );
}

export default App;

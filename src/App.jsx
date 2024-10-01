// App.jsx
import "./main";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <main className="grid gap-8">
      {/* - */}
      {/* Introduction section */}
      <section className="grid-rows-3 md:grid-cols-3 md:text-left md:items-center">
        <Header />
        <Intro />
        <Skills />
      </section>

      {/* Projects section */}
      <section>
        <h2>Projects</h2>

        {/* Project */}
        <div>
          {/* Semester project 2 */}
          <ProjectCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouJIbOHd1UO6jOaodxLjoyw7jBYBA6kP8P-f-bC7sqzTk0IcFiL0Pbx93qXLWa39oNLM&usqp=CAU"
            alt="VG bilde"
            title="Vg tittel"
            description="VG description"
            repo="https://github.com/Ramsnes/semester_project_2_resit"
            deployment="https://semester-2-resit.netlify.app/"
          />
          {/* JavaScript frameworks CA */}
          <ProjectCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouJIbOHd1UO6jOaodxLjoyw7jBYBA6kP8P-f-bC7sqzTk0IcFiL0Pbx93qXLWa39oNLM&usqp=CAU"
            alt="VG bilde"
            title="Vg tittel"
            description="VG description"
            repo="https://github.com/Ramsnes/semester_project_2_resit"
            deployment="https://semester-2-resit.netlify.app/"
          />
          {/* Project exam 2 */}
          <ProjectCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTouJIbOHd1UO6jOaodxLjoyw7jBYBA6kP8P-f-bC7sqzTk0IcFiL0Pbx93qXLWa39oNLM&usqp=CAU"
            alt="VG bilde"
            title="Vg tittel"
            description="VG description"
            repo="https://github.com/Ramsnes/semester_project_2_resit"
            deployment="https://semester-2-resit.netlify.app/"
          />
        </div>
      </section>

      {/* Contact / footer section */}
      <section>
        <h2 className="text-2xl mt-2">Contact me</h2>
      </section>
    </main>
  );
}

export default App;

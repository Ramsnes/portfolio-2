// App.jsx
import "./main";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";
import { MappedProjects } from "./components/projects/MappedProjects";

function App() {
  return (
    <main className="grid gap-8">
      {/* Introduction */}
      <section>
        <Header />
        <Intro />
        <Skills />
      </section>

      {/* Projects */}
      <section className="grid-rows-3 md:grid-cols-3 md:text-left md:items-center">
        <h2 className="text-2xl">Projects</h2>
        <div>
          <MappedProjects />
        </div>
      </section>

      {/* Footer */}
      <section>
        <h3 className="text-2xl mt-2">Contact me</h3>
      </section>
    </main>
  );
}

export default App;

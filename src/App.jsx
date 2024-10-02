// App.jsx
import "./main";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";
import { MappedProjects } from "./components/projects/MappedProjects";
import { Footer } from "./components/Footer";

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
      <section className="grid-rows-3 md:grid-cols-3 items-center">
        <h2 className="text-2xl">Projects</h2>
        <div>
          <MappedProjects className="md:max-w-full" />
        </div>
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;

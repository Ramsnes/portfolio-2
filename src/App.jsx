// App.jsx
import "./main";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="grid gap-8">
      {/* Introduction */}
      <section className="intro grid grid-rows-3 w-full max-w-screen-lg mx-auto gap-5 text-left md:grid-cols-1 md:w-10/12 ">
        <Header />
        <Intro />
        <Skills />
      </section>

      {/* Projects */}
      <section className="projects grid-rows-3 md:grid-cols-3 items-center">
        <h2 className="text-4xl text-center mb-5">My projects</h2>
        <div>
          <Projects className="md:max-w-full" />
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;

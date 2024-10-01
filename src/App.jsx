// App.jsx
import "./main";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { ImageCard } from "./components/ImageCard";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="grid gap-8">
      {/* Introduction section */}
      <section className="grid-rows-3 md:grid-cols-3 md:text-left md:items-center">
        {/* Header  */}
        <div>
          <Header />
        </div>

        {/* Intro  */}
        <div>
          <Intro />
        </div>

        {/* Skills */}
        <div>
          <Skills />
        </div>
      </section>

      {/* Projects section */}
      <section>
        <h2>Projects</h2>

        {/* Project - map method projects? */}
        <div>
          {/* Image  */}
          <div>
            <ImageCard
              src="https://akamai.vgc.no/users/schibsted/images/114785677.jpg?t[strip]=1&t[crop][x]=0&t[crop][y]=0&t[crop][width]=720&t[crop][height]=529&t[resize][width]=720&accessToken=4718d5ae8a04312439821a6d40875ac1ec95d4a768a863281e98870c046207b5"
              alt="mountains"
            />
          </div>

          {/* Title  */}
          <div>
            <h1 className="mb-2 text-4xl font-medium">Description</h1>

            {/* Description  */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              maxime recusandae architecto repellat laudantium dignissimos
              voluptatibus velit, iure ipsam libero unde nam incidunt error
              animi tempora in perspiciatis voluptates qui praesentium molestiae
              sunt ad illum. Nostrum vitae voluptates ducimus aperiam!
            </p>
          </div>

          {/* Links */}
          <h2 className="text-2xl mt-2">Links here</h2>
          <p>Link Link Link</p>
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

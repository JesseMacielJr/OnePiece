import "./App.css";
import Slider from "./Components/Slider";
import Personagem from "./Components/Personagem";
import Footer from "./Components/Footer";
import Background from "./Components/Background";
import { PersonagemProvider } from "./PersonagemContext";

function App() {
  return (
    <PersonagemProvider>
      <div className="container">
        <Background />
        <main>
          <section>
            <Personagem />
            <Slider />
          </section>
        </main>
        <Footer />
      </div>
    </PersonagemProvider>
  );
}

export default App;

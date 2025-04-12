import Navbar from "./components/NavBar/Navbar";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

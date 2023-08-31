import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Social />
    </div>
  );
}

export default App;

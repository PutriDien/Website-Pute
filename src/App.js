import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import "../src/App.css"
import Services from "./components/Services";
import RecentWork from "./components/RecentWork";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Services />
      <RecentWork />
    </div>
  );
}

export default App;

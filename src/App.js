
import './App.css';
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'
import { About } from './components/About'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

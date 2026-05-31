import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Activities } from './components/Activities';
import { Gallery } from './components/Gallery';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />

      <About />
      <Education />
      <Projects />
      <Activities />

      <Gallery />
      <Articles />
      <Contact />
    </Layout>
  );
}

export default App;

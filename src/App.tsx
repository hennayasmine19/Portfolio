import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Languages } from './components/Languages';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Languages />
      </main>
      <footer className="py-6 text-center text-gray-600 dark:text-gray-300">
        <p> </p>
      </footer>
    </div>
  );
}

export default App;
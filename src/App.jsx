import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  // Start with 'dark' mode by default
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    // The top-level class will switch dynamically between "dark" and "light"
    <div className={`app-container ${theme} min-h-screen selection:bg-indigo-500 selection:text-white`}>
      {/* Pass the theme state and toggle function down as props */}
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
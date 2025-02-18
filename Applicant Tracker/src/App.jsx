import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const renderSection = () => {
    switch(currentSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;